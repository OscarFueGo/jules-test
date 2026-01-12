import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" >Overview</NavLink></li>
                <li><NavLink to="/experience">Experience</NavLink></li>
                <li><NavLink to="/education">Education</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;