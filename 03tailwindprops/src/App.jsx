import { useState } from 'react'

import './App.css'
import Card from './components/Card'
function App() {
  // const [count, setCount] = useState(0)

  // let myObj = {
  //   username: "Puneet",
  //   age : 20
  // }
  // let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400  text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    
    <Card username = "chaiaurcode" para = "#245"  /> 
    
    <Card username={"Puneet"}/>
    </>
  )
}

export default App
