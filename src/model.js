import { action } from 'easy-peasy'

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

  toggle: action((state, id) => {
      state.todos.map(todo => {
          if (todo.id === id) {
              todo.completed = !todo.completed
          }
          return todo
      })
  })
};
