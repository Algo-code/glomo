import logo from '../logo.svg';
import React from 'react';
//import '../index.css'

function EmployeeCard(props){
    return(
        <div class="card">
            <div class="emp-avatar">
                <img src={logo} alt="profile"/> 
            </div>
            <div class="container">
                <h3>{props.name + ' ' + props.last_name}</h3>
                <p class="level2">{props.job_title}</p>
                <p class="level3">{props.department}</p>
            </div>
        </div>
    )
}

export default EmployeeCard;