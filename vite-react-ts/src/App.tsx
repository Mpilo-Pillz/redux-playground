import { useState } from "react";
import { NewTodo } from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", text: "LEarn React" },
    { id: "2", text: "Learn TypeSCript" },
  ]);

  const onAddTodoHandler = (todoText: string) => {
    setTodos((prevTodos) => {
      return prevTodos.concat({ id: "3", text: todoText });
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
