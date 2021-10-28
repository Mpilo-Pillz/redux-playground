import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Todos items={["LEarn React", "Learn TypeSCript"]} />
    </div>
  );
}

export default App;
