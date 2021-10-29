import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Todos
        items={[
          { id: "1", text: "LEarn React" },
          { id: "2", text: "Learn TypeSCript" },
        ]}
      />
    </div>
  );
}

export default App;
