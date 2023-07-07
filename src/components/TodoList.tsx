import "./todo-list.css";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import { ITodo } from "../interface/todo";

function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filterTodos, setFilterTodos] = useState<ITodo[]>([]);
  const [status, setStatus] = useState<string>("all");
  const [inputText, setInputText] = useState<string>("");

  const handleClick = () => {
    const newTodo: ITodo = {
      id: Math.random() * 100,
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  //select option
  const filterHandler = () => {
    switch (status) {
      case "complete":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncomplete":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  //save
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.getItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  return (
    <>
      <div className="todo-list">
        <input
          value={inputText}
          type="text"
          placeholder="add todo..."
          className="todo-input"
          onChange={(e) => setInputText(e.currentTarget.value)}
        />
        <button className="todo-button" type="submit" onClick={handleClick}>
          +
        </button>
        <div className="select">
          <select
            name="todos"
            id="todo-title"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="uncomplete">Uncomplete</option>
          </select>
        </div>
      </div>
      <ul className="list">
        {filterTodos.map((todo) => {
          const { text, id, completed } = todo;
          return <Todo id={id} text={text} completed={completed} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;
