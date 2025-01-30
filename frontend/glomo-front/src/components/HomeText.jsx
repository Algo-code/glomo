import React from 'react'


function HomeText(){
    return(
        <div class="home-text-comp">
            <h1>Welcome to the Employee Management Portal</h1>
            <p>The portal helps you to keep track of all employees and add new joining members</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <a href='/employees'>
                <button class="emp-add-button">All Employees</button>
            </a>
        </div>
    );
}

export default HomeText