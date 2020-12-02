import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const add = useStoreActions((actions) => actions.add);

  const handleSubmit = (e) => {
    e.preventDefault();
    add({
      title,
      completed: false,
    });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
