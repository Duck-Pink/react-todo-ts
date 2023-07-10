import "./todo-list.css";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import { ITodo } from "../interface/todo";

function TodoList({ date }: any) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleClick = () => {
    if (!inputText) {
      return;
    }
    const newTodo: ITodo = {
      id: Math.random() * 100,
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  //select option
  const handleFilter = (e: any) => {
    const { value } = e.target;
    switch (value) {
      case "complete":
        setTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncomplete":
        setTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setTodos(todos);
        break;
    }
  };

  //save
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    saveLocalTodos();
  }, []);

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const localStorageTodos = localStorage.getItem("todos");
      if (localStorageTodos === null) {
        return;
      }
      let todoLocal = JSON.parse(localStorageTodos);
      setTodos(todoLocal);
    }
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  const handleInputText = (e: any) => setInputText(e.currentTarget.value);

  return (
    <>
      <div className="todo-list">
        <input
          value={inputText}
          type="text"
          placeholder="add todo..."
          className="todo-input"
          onChange={handleInputText}
        />
        <button className="todo-button" type="submit" onClick={handleClick}>
          +
        </button>
        <div className="select">
          <select name="todos" id="todo-title" onChange={handleFilter}>
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="uncomplete">Uncomplete</option>
          </select>
        </div>
      </div>
      <div className="container">
        <ul className="list">
          {todos.map((todo, index) => {
            const { text, id, completed } = todo;
            return (
              <Todo
                key={index}
                id={id}
                text={text}
                completed={completed}
                todos={todos}
                setTodos={setTodos}
                date={date}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
