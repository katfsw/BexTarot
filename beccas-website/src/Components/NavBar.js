import React from 'react';
import '../App.css'

let NavBar = () => {

    return (
        <div class="navbar">
           <h3 class="title">Rebecca's <br/> <div class="smallertitle">Tarot Readings</div></h3>

           <div class="navlinks">
                <a class="navatags" href="#">Home</a>
                <a class="navatags" href="#">About Me</a>
                <a class="navatags" href="#">Contact Me</a>
           </div>
        </div>
    )
}

export default NavBar;