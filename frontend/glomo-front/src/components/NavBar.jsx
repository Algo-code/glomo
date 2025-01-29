import React from 'react';
import logo from '../logo.svg';

function NavBar(hide_button){
    return (
        <div class="nav">
            <a href='/'>
                <img class="nav-logo" src={logo} alt='logo' href='/'/>
            </a>
                
            <div class="emp-button" hidden={hide_button}>
                <a href='/employees/add'>
                    <button class="emp-add-button">Add Employee</button>
                </a>
                
            </div>
        </div>
    );
}

export default NavBar;