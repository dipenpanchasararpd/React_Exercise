import React from 'react'
import Menu from './Menu'
import { Outlet, Route, Routes, NavLink } from 'react-router-dom'


function Main() {
    return (
        <>
            <div className="navbar">
                <h2>Automobile</h2>
            </div>

            <div className="row">
                <div class="side"><NavLink to='/' >Categories</NavLink></div>
                <div className="main">
                    <Menu />
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}

export default Main
