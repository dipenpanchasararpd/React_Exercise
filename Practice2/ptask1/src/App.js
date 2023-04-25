import Home from './component/Home';
import Confidential from './component/Confidential';
import Login from './component/Login';
import Logout from './component/Logout';
import Help from './component/Help';
import { Route, Routes } from "react-router-dom";
import Menu from './component/menu'
import Error from './component/Error';
import './App.css';
import React, { useContext, useState } from 'react'
import UserContext, { UserProvider } from './component/UserContext';
import Form from './component/Form';

const App = () => {

  const state = localStorage.getItem('flag') || false;
  const [loggedIn, setLoggedIn] = useState(state)
  const toggleRoute = () => {
    setLoggedIn(!loggedIn)
    localStorage.setItem("flag", loggedIn);
  }

  return (
    <div className='App'>

      <UserProvider value={{ loggedIn, setLoggedIn, toggleRoute }}>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/component/Confidential' element={<Confidential />} />

          <Route path='/component/Logout' element={<Logout />} />

          <Route element={localStorage.getItem("flag") === "true" ? <Error /> : <Login />} />

          <Route path='/component/Login' element={<Login />} />


          <Route path='/component/Help' element={<Help />} />
          <Route path='/component/Form' element={<Form />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </UserProvider>


    </div>
  );
};

export default App;
