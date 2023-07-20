import "./todo-list.css";
import Todo from "./Todo";
import { ChangeEvent, useEffect, useState } from "react";
import { ITodo } from "../../interface/todo";
import Nav from "../Nav/Nav";

function TodoList() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleClick = () => {
    if (!inputText) {
      alert("Please enter text ");
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
  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
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

  const handleInputText = (e: ChangeEvent<HTMLInputElement>) =>
    setInputText(e.currentTarget.value);

  return (
    <>
      <div className="todo-list">
        <Nav />
        <div className="header">
          <h1 className="todo-title"> Todo List </h1>
          <form className="form-deadline">
            <h2>deadline:</h2>
            <input
              type="date"
              className="todo-deadline"
              name="deadline"
              onChange={handleChangeDate}
              min={"2023-07-20"}
            />
          </form>
        </div>
        <div className="banner">
          <div className="todo-content">
            <input
              value={inputText}
              type="text"
              placeholder="add todo..."
              className="todo-input"
              onChange={handleInputText}
              autoFocus
            />
            <button className="todo-button" type="submit" onClick={handleClick}>
              +
            </button>
          </div>
          <div className="select">
            <select name="status" onChange={handleFilter}>
              <option value="all">All</option>
              <option value="complete">Complete</option>
              <option value="uncomplete">Uncomplete</option>
            </select>
          </div>
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
