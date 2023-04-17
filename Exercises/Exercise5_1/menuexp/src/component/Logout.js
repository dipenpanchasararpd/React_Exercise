// import React, { useState } from 'react'
// import { UserProvider } from './UserContext';
// import App from '../App'


// function Logout() {
//   const [loggedIn, setLoggedIn] = useState(false)
//   const toggleRoute = () => {
//     setLoggedIn(!loggedIn)
//   }
//   return (
//     <div>
//       Logout
//       <button onClick={() => toggleRoute()}>Toggle</button>
//       <UserProvider value={loggedIn}>
//         <App />
//       </UserProvider>

//     </div>
//   )
// }

// export default Logout


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
