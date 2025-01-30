import React, { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../components/NavBar";
import EmployeeCard from "../components/EmployeeComponents";

const AllEmployees = () => {
  const [query, setQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // Separate state for search results

  // Function to fetch all employees
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8000/employee/");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // Function to handle search
  const handleSearch = async () => {
    try {
      if (query.trim() === "") {
        setSearchResults([]); // Clear search results if query is empty
      } else {
        const response = await axios.get(
          `http://localhost:8000/employees/search/?q=${query}`
        );
        setSearchResults(response.data);
      }
    } catch (error) {
      console.error("Error searching employees:", error);
    }
  };

  // Fetch employees only when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Run search when query changes
  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <div>
      {/* <NavBar  showNavLinks={false} /> */}
      {NavBar("All Employees")}
      <div class="searchbox">
        <input
          class="searchbar"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Employee..."
        />
        <br />
        <div class="grid-parent">
          <div className="grid">
            {query.trim() !== "" ? (
              // Show only search results when typing
              searchResults.length > 0 ? (
                searchResults.map((employee, id) => (
                  <EmployeeCard key={id} {...employee} />
                ))
              ) : (
                <div className="center">
                  <h2>No employees found.</h2>
                </div>
              )
            ) : // Show all employees when search is empty
            employees.length > 0 ? (
              employees.map((employee, id) => (
                <EmployeeCard key={id} {...employee} />
              ))
            ) : (
              <div className="center">
                <h2>You currently have no registered employees.</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmployees;
