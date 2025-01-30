import React from 'react';
import logo from '../logo.svg';

function NavBar(page_heading){
    return (
        <div class="nav">
            <div class="logo-heading">
                <a href='/'>
                    <img class="nav-logo" src={logo} alt='logo' href='/'/>
                </a>
                <h3 class="nav-page-heading">{page_heading}</h3>
            </div>
            
            <div class="emp-button">
                <a href='/employees/add'>
                    <button class="emp-add-button">Add Employee</button>
                </a>
                
            </div>
        </div>
    );
}

export default NavBar;