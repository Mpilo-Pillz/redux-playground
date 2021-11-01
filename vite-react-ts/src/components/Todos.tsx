import { FC, MouseEvent, useContext } from "react";
import { TodoItem } from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

// return (
//   <ul className={classes.todos}>
//     {props.items.map((item) => (
//       <TodoItem
//         key={item.id}
//         text={item.text}
//         onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
//       />
//     ))}
//   </ul>
// );

// const Todos: FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
//   props
// ) => {
//   const todosCtx = useContext(TodosContext)
//   return (
//     <ul className={classes.todos}>
//       {todosCtx.items.map((item) => (
//         <TodoItem
//           key={item.id}
//           text={item.text}
//           onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
//         />
//       ))}
//     </ul>
//   );
// };

// export default Todos;
