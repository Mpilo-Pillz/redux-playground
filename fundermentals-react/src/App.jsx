import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import  CustomHook from "./components/ExploringCustomHooks/CustomHooks"
import Todo from './components/boringdermentals/Todo'
import SelectTranslation from './components/nestedObjects/NestedObjectSelector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo text="boringdermental knowledge" />
    <SelectTranslation />
    {/* <CustomHook /> */}
    </>
  )
}

export default App
