import React from 'react';
import logo from '../logo.svg';

function NavBar(){
    return (
        <div class="nav">
                <img class="nav-logo" src={logo} alt='logo'/>
                {/* <p>Home</p> */}
                <div class="emp-button">
                    <button class="emp-add-button">Add Employee</button>
                </div>
        </div>
    );
}

export default NavBar;