import React, { useState } from 'react'
import { useContext } from 'react';
import UserContext from './UserContext';

function Login() {

  const isLoggedIn = useContext(UserContext);
 
  function Toggle(){
    if(localStorage.getItem("flag")==='false')
    {
      return <h3>Logout</h3>
    }
    else{
      return <h3>Login</h3>
    }
  }
  
  return (
    <div>
      Login
      <button onClick={isLoggedIn.toggleRoute}>{Toggle()}</button>
    </div>
  )
}

export default Login
