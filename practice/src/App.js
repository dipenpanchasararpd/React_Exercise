// // import logo from './logo.svg';
import './App.css';
import Clock from './component/clock';
import React, { Component } from 'react';
// import ComponentA from './component/ComponentA';
// import { UserProvider } from './component/userContext';
import Hooks from './component/Hooks';
import Hello from './component/hello';
import Counter from './component/Counter';
import Form from './component/Form';
import { Route, Routes } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div className='App' style={{ marginTop: 100 }}>

        <Routes>
          <Route path='/' element={<Hello />} />
          <Route path='/component/Hooks' element={<Hooks />} />
          <Route path='/component/Counter' element={<Counter />} />
          <Route path='/component/Form' element={<Form />} />
          <Route path='/component/Clock' element={<Clock />} />

        </Routes>

        {/* <UserProvider value="Dipen Panchasara">
          <ComponentA />
        </UserProvider> */}




        {/* 

        <Clock />
        <Hooks />
        <Form /> */}
      </div>
    )
  }
}
// function App() {
//   // let str = 'Hello';
//   // let arr1 = [1, 2, 3, 4, 5];

//   // function avg(a, b, c, d, e) {
//   //   return a + b + c + d + e / 2;
//   // }

//   // console.log(avg(...arr1));
//   return (

//     <>
//       <Clock />
//       {/* <meta http-equiv="refresh" content="1"></meta> */}

//       {/* <h2>Practice</h2>
//       <div className="App">
//         Your mark is {str.charAt(1)} {avg(...arr1)}
//       </div>
//       <Hello />
//       <Counter /> */}
//       {/* <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div> */}
//     </>

//   );
// }

export default App;
