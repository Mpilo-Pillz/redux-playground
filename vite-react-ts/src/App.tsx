import { useState } from "react";
import { NewTodo } from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  const onAddTodoHandler = (todoText: string) => {
    console.log("TODO: pass in text");
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodoHandler} />
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
