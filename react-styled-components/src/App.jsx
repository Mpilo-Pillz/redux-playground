import { Button } from "./styledComponents/Button.style";
import { AppContainer } from "./styledComponents/Container.style";
import './App.css'

function App() {
  return (
    <AppContainer >
      <Button backgroundColor="red">Click me</Button>
      <Button backgroundColor="green">Click me</Button>
      <Button backgroundColor="blue">Click me</Button>
    </AppContainer>
  )
}

export default App
