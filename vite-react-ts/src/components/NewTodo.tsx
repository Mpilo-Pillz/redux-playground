import { FormEvent, useRef, FC, useContext } from "react";
import classes from "./NewTodo.module.css";

import { TodosContext } from "../store/todos-context";

export const NewTodo: FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      // throw error
      return;
    }
    todosCtx.addTodo(enteredText);
    // props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

// export const NewTodo: FC<{ onAddTodo: (text: string) => void }> = (props) => {
//   const todoTextInputRef = useRef<HTMLInputElement>(null);

//   const submitHandler = (event: FormEvent) => {
//     event.preventDefault();

//     const enteredText = todoTextInputRef.current!.value;

//     if (enteredText?.trim().length === 0) {
//       // throw error
//       return;
//     }
//     props.onAddTodo(enteredText);
//   };

//   return (
//     <form onSubmit={submitHandler} className={classes.form}>
//       <label htmlFor="text">Todo text</label>
//       <input ref={todoTextInputRef} type="text" id="text" />
//       <button>Add Todo</button>
//     </form>
//   );
// };
