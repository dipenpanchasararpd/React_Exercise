// import React, { useState } from 'react'

// function Hooks() {

//     const [name, setName] = useState('Dipen');

//     let val = name;

//     function changeName() {
//         val === 'Dipen' ? setName('Dipen Panchasara') : setName('Dipen');
//     }

//     return (
//         <div>
//             <h1>{name}</h1>
//             <button className='btn' onClick={changeName}>Change</button>
//         </div>
//     )
// }

// export default Hooks

// import React, { useState } from 'react'

// const Hooks = () => {

//     const arr = [
//         { id: 0, Name: "Dipen" },
//         { id: 1, Name: "Meet" }
//     ];

//     const [myval, setMyval] = useState(arr);

//     function clerdata() {
//         setMyval([]);
//     }

//     function removeEle(id) {
//         const newArray = myval.filter((curELe) => {
//             return curELe.id !== id;
//         })
//         setMyval(newArray);
//     }

//     return (
//         <>
//             {
//                 myval.map((curntele) => {
//                     return (
//                         <h1>Id : {curntele.id} Name : {curntele.Name}
//                             <button onClick={() => removeEle(curntele.id)}>Remove</button>
//                         </h1>

//                     )
//                 })
//             }
//             <button onClick={clerdata}>Clear</button>

//         </>
//     )
// }

// export default Hooks

// import React, { useEffect, use , useState } from 'react'

// const Hooks = () => {

//     const [count, setCount] = useState(0);
//     const [item, setItem] = useState(1);

//     useEffect(() => {
//         document.title = `Messages(${count})`;
//         console.log("hello")
//     })

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>incriese</button>

//             <h1>{item}</h1>
//             <button onClick={() => setItem(item * 2)}>incriese 2X</button>
//         </div>
//     )
// }

// export default Hooks

// import React, { useState, useRef } from 'react';


// const Hooks = () => {
//     const [name, setName] = useState("");
//     const inputele = useRef("");

//     const refuse = () => {
//         setName("");
//         inputele.current.focus();
//     };

//     return (
//         <div>
//             <input name='name' autoComplete='off' type='text' value={name} onChange={(e) => setName(e.target.value)} />
//             <button onClick={refuse}>Reset</button>
//             <hr></hr>
//             <div>
//                 <h1>The Name Is {name}</h1>
//             </div>
//         </div>
//     )
// }

// export default Hooks

// import React, { useReducer } from 'react'

// const initialState = 0;

// const reducer = (state, action) => {
//     if (action.type === "INCREMENT") {
//         return state + 1;
//     }
//     else if (action.type === "DICREMENT") {
//         return state - 1;
//     }
//     return state;
// }

// const Hooks = () => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <>

//             <div>
//                 <button onClick={() => dispatch({ type: "INCREMENT" })}><h1>+</h1 ></button>
//                 <h1>{state}</h1>
//                 <button onClick={() => dispatch({ type: "DICREMENT" })}><h1>-</h1 ></button>
//             </div>
//         </>
//     )
// }

// export default Hooks

// import { useState } from 'react';

// function Hooks() {
//     const [count, setCount] = useState(0);

//     const handleClick = () => {
//         console.log('Before setState:', count);
//         setCount(count + 1);
//         console.log('After setState:', count);
//     };
//     console.log('Outdside setState:', count);

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={handleClick}>Increment</button>
//         </div>
//     );
// }
// export default Hooks
import React, { useReducer } from "react";

const initialState = { count: 2 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function init(initialState) {
    return (
        console.log("hello"),
        { count: initialState.count * 2 }
    )
}

function Hooks() {
    const [state, dispatch] = useReducer(reducer, initialState, init);

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
    );
}

export default Hooks



