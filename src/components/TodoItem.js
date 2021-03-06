import React from "react";
import { action, useStoreActions } from "easy-peasy";

const TodoItem = ({ todo }) => {
  // const toggle = useStoreActions(actions => actions.toggle)
  const { remove, toggle } = useStoreActions((actions) => ({
    remove: actions.remove,
    toggle: actions.toggle,
  }));

  return (
    <div style={{ width: "300px" }}>
      <ul>
        <li
          style={{
            height: "20px",
            justifyContent: "space-between",
            alignItems: "center",
            display: "flex",
          }}
        >
          <p
            onClick={() => toggle(todo.id)}
            style={{
              display: "inline",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.title}
          </p>
          <button onClick={() => remove(todo.id)} style={{ display: "inline" }}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
