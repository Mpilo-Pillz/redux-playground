import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import  CustomHook from "./components/ExploringCustomHooks/CustomHooks"
import Todo from './components/boringdermentals/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo text="boringdermental knowledge" />

    {/* <CustomHook /> */}
    </>
  )
}

export default App
