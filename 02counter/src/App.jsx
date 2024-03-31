import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

const [count , setCount] = useState(15)

const addValue = ()=>{
  if(count < 20){
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1) // because react fibre sends in batch of repeated work hence out is same
  // if we want to increse value to 19 as per requirement
  setCount((prevCount)=> prevCount + 1)
  setCount((prevCount)=> prevCount + 1)
  setCount((prevCount)=> prevCount + 1)
  setCount((prevCount)=> prevCount + 1) // now increase by 4 
// VIMP INTERVIEW QUESTION
  }

}
const removeValue = ()=>{
  if(count > 0){
    setCount(count - 1)
  }

}



  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter : {count}</h2>


      <button onClick={addValue}>Add Value : {count}</button>
      <br/>
      <button onClick={removeValue}>Remove Value : {count}</button>
      <p>Footer: {count}</p>
    </>
  )
}

export default App
