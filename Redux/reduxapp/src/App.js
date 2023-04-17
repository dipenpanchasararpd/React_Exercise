import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber, multi, incNumberbytwo } from './action/index'

function App() {
  const mystate = useSelector((state) => state.changethenum)
  const dispatch = useDispatch();
  return (
    <div>
      <button title='Decrement' onClick={() => dispatch(decNumber())}>-</button>
      <h1> <button onClick={() => dispatch(multi())}>x</button>{mystate} <button onClick={() => dispatch(incNumberbytwo())}>+2</button></h1>
      <button onClick={() => dispatch(incNumber())}>+</button>


    </div>
  )
}

export default App

