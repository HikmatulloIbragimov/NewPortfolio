import React from 'react';
import { Nav } from './styled';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <Nav>
            <nav>
                <h3>Hikmatullo.</h3>
                <ul>
                    <li><NavLink to={'/'}>Home <span className='span'></span></NavLink></li>
                    <li><NavLink to={'/portfolio'}>Portfolio <span className='span'></span></NavLink></li>
                    <li><NavLink to={'/services'}>Services <span className='span'></span></NavLink></li>
                </ul>
            </nav>
        </Nav>
    );
}

export default Navbar;
