import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // const myObj = {
  //   name:"sneha",
  //   age:12
  // }
  // const myArr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-red-400 rounded-xl text-black p-4 mb-4'>Tailwind css and Props</h1>
  <Card username = "sneha yadav" btnText = "Click me" />
  <Card username = "sarita yadav" />

    </>
  )
}

export default App
