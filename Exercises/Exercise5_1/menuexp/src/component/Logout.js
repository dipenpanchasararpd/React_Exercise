<<<<<<< HEAD

=======
>>>>>>> d30967a8e0e9b6ee5a1109e06843984447e2a9f5
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
