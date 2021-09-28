import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CustomHook from './components/CustomHooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CustomHook />
    </>
  )
}

export default App
