import "./todo-list.css";
import Todo from "./Todo";
import { useState } from "react";
import { ITodo } from "../interface/todo";

function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleClick = () => {
    const newTodo: ITodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <div className="todo-list">
        <input
          type="text"
          placeholder="add todo..."
          className="todo-input"
          onChange={(e) => setInputText(e.currentTarget.value)}
        />
        <button className="todo-button" type="submit" onClick={handleClick}>
          +
        </button>
        <div className="select">
          <select name="todos" id="todo-title">
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="uncomplete">Uncomplete</option>
          </select>
        </div>
      </div>
      <ul className="list">
        {todos.map((todo) => {
          const { text, id, completed } = todo;

          return <Todo id={id} text={text} completed={completed} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;

// time add :{dayjs(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss")}
