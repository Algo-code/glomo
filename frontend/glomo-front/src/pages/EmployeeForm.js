import React from 'react'
import NavBar from '../components/NavBar';
import EmployeeForm from '../components/EmployeeForm';

function AddEmployee(){
    return(
        <div class="add-emp-page">
            {NavBar(true)}
            {EmployeeForm()}
        </div>
        
    );
}

export default AddEmployee

