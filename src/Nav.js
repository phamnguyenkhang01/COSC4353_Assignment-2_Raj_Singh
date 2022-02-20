import React from 'react';
import './Nav.css';

function Nav(){
    return(
        <nav>
            <h2> Fuel Quote</h2>
            <ul className='nav-links'>
                <li>Login</li>
                <li>Signup</li>
                <li>Profile</li>
            </ul>
        </nav>
    )
}

export default Nav;