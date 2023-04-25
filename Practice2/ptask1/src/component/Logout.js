
import React, { useState } from 'react';
import { UserProvider } from './UserContext';
import App from '../App';
import Login from './Login';

function Logout() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
          <UserProvider value={true}>
            <App />
          </UserProvider>
        </>
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default Logout;
