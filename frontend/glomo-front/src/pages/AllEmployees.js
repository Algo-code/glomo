import React from "react";
import axios from "axios";

import NavBar from "../components/NavBar";
import EmployeeCard from "../components/EmployeeComponents";

class AllEmployees extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    let data;
    axios
      .get("http://localhost:8000/employee/")
      .then((res) => {
        data = res.data;
        this.setState({
          employees: data,
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        {NavBar(false)},
        <div class="grid">
          {this.state.employees.map((employee, id) => EmployeeCard(employee))}
        </div>
      </div>
    );
  }
}

export default AllEmployees;
