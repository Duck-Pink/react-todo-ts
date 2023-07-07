import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1> Todo List </h1>
      <form className="form-deadline">
        <h2>deadline:</h2>
        <input type="date" id="deadline" name="deadline" />
      </form>
      <TodoList />
    </div>
  );
}

export default App;
