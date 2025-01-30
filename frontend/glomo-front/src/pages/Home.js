import React from 'react';
import NavBar from '../components/NavBar';
import HomeText from '../components/HomeText';

function Home(){
    return (
        <div class="home">
            {NavBar("")}
            {HomeText()}
            {/* <div class="home-text">
                {HomeText()}
            </div> */}
            
        </div>
        
    );
}

export default Home