import Todos from "./components/Todos";
import model from "./model";
import { StoreProvider, createStore } from "easy-peasy";
import AddTodo from "./components/AddTodo";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <Todos />
        <AddTodo />
      </div>
    </StoreProvider>
  );
}

export default App;
