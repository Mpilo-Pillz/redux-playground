import { FormEvent, useRef } from "react";

export const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      // throw error
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input ref={todoTextInputRef} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};
