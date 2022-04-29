import { Button, ButtonLabel, CustomButton } from "./styledComponents/Button.style";
import { AppContainer } from "./styledComponents/Container.style";
import './App.css'

function App() {
  return (
    <AppContainer >
      <Button backgroundColor="red">
        <ButtonLabel>
        Click me
        </ButtonLabel>
        </Button>
      <Button backgroundColor="green">Click me</Button>
      <Button backgroundColor="blue">Click me</Button>
      <CustomButton buttonLabel="Click Here" backgroundColor="teal"></CustomButton>
    </AppContainer>
  )
}

export default App
