import React from "react";
import TodoItem from "./TodoItem";
import { useStoreState } from "easy-peasy";

const Todos = () => {
  const todos = useStoreState(state => state.todos);

  return (
    <div>
      <h1>Todos</h1>
      <p>here some list todo</p>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Todos;
