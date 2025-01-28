//import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

import EmployeeCard from './components/EmployeeComponents';
import NavBar from './components/NavBar';

class App extends React.Component { 
  state = {
    employees: [],
  }

  componentDidMount(){
    let data;
    axios.get('http://localhost:8000/employee/')
    .then(res => {
      data = res.data;
      this.setState({
        employees : data
      });
    }).catch(err => {})
  }

  render() { 
      return(
        <div>
        {NavBar()},
        <div class="grid">
          {this.state.employees.map((employee, id) => (
          EmployeeCard(employee)
            ))}
        </div>
        </div>
        
      ); 
  } 
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
