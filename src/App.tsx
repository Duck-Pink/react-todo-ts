import TodoList from "./components/TodoList";
import "./App.css";
import { ChangeEvent, useState } from "react";

function App() {
  const [date, setDate] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };
  return (
    <div className="app">
      <h1> Todo List </h1>
      <form className="form-deadline">
        <h2>deadline:</h2>
        <input
          type="date"
          id="deadline"
          name="deadline"
          onChange={handleChange}
        />
      </form>
      <TodoList date={date} />
    </div>
  );
}

export default App;
