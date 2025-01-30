import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeCard from './EmployeeComponents';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Function to handle search
    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/employees/search/?q=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error("There was an error searching:", error);
        }
    };

    // Automatically search when query changes
    useEffect(() => {
        if (query) {
            handleSearch();
        } else {
            setResults([]);
        }
    }, [query]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Employee..."
            />
            <ul>
                {results.map((employee) => (
                    <div class="grid">
                        {EmployeeCard(employee)}
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
