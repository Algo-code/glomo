import React from 'react'


function HomeText(){
    return(
        <div class="home-text-comp">
            <h2>Welcome to the Employee Management Portal</h2>
            <h3>The portal helps you to keep track of all employees and add new joining members</h3>
            <br/>
            <a href='/employees'>
                <button class="emp-add-button">all employees</button>
            </a>
        </div>
    );
}

export default HomeText