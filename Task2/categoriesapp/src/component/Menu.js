import React from 'react'
import { NavLink } from 'react-router-dom';
import './Style.css';


function Menu() {
    return (
        <div className='menu'>
            <NavLink to="Overview">OVERVIEW</NavLink>
            <NavLink to="Tags">TAGS</NavLink>
        </div>
    )
}

export default Menu
