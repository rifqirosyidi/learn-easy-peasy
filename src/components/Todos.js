import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useStoreState, useStoreActions } from "easy-peasy";

const Todos = () => {
  const todos = useStoreState((state) => state.todos);
  const fetchTodos = useStoreActions((actions) => actions.fetchTodos);

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
