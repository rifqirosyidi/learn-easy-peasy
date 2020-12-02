import { action, thunk } from "easy-peasy";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  todos: [
    {
      id: 1,
      title: "Buy Coffe",
      completed: true,
    },
    {
      id: 2,
      title: "Post Article",
      completed: false,
    },
  ],

  //   Thunks
  fetchTodos: thunk(async (actions) => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    const data = await res.json();
    actions.setTodos(data);
  }),

  //   Actions
  setTodos: action((state, todos) => {
    state.todos = todos;
  }),

  add: action((state, todo) => {
    todo.id = uuidv4();
    state.todos = [...state.todos, todo];
  }),

  toggle: action((state, id) => {
    state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }),

  remove: action((state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  }),
};
