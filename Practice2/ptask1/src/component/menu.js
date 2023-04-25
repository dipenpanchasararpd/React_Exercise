import Form from './Form';
import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import UserContext from './UserContext';


function Menu() {
    const logged = useContext(UserContext);
    
    return (
        <>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/component/Confidential">Confidential</NavLink>
               
                {localStorage.getItem("flag")==="true" ? (
                    <NavLink to="/component/Logout">Login</NavLink>
                ) : (
                    <>
                    <NavLink to="/component/Help">Help</NavLink>
                    <NavLink to="/component/Form">Form</NavLink>
                    <NavLink to="/component/Login">Logout</NavLink>
                    </>
                    
                )}

                <hr />
            </div>
        </>

    );
}

export default Menu;
