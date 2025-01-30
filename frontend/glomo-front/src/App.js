//import logo from './logo.svg';
import "./App.css";
import React from "react";
//import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AllEmployees from "./pages/AllEmployees";
import EmployeeForm from "./pages/EmployeeForm";
import Home from "./pages/Home";

class App extends React.Component {
  // state = {
  //   employees: [],
  // }

  // componentDidMount(){
  //   let data;
  //   axios.get('http://localhost:8000/employee/')
  //   .then(res => {
  //     data = res.data;
  //     this.setState({
  //       employees : data
  //     });
  //   }).catch(err => {})
  // }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<AllEmployees/>} />
          <Route path="/employees/add" element={<EmployeeForm/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
