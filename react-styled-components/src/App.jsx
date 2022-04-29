import { useState } from 'react'
import { Button } from "./styledComponents/Button.style";
import './App.css'

function App() {
  return (
    <div className="App">
      <Button backgroundColor="red">Click me</Button>
      <Button backgroundColor="green">Click me</Button>
      <Button backgroundColor="blue">Click me</Button>
    </div>
  )
}

export default App
