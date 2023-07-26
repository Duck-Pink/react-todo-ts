import "./TodoList.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Todo from "./Todo";
import { ITodo } from "../../interface/todo";
import Nav from "../Nav/Nav";

function TodoList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isDeadline, setIsDeadline] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    setIsDeadline(false);
  };

  const handleClick = () => {
    if (!inputText) {
      setIsError(true);
      return;
    }
    const newTodo: ITodo = {
      id: Math.random() * 100,
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText("");
    inputRef.current?.focus();
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

  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    setInputText(e.currentTarget.value);
  };

  return (
    <>
      <div className="todo-list">
        <Nav />
        <div className="header">
          <h1 className="todo-title"> Todo List </h1>
          <form className="form-deadline">
            <h2>Deadline :</h2>
            <input
              type="date"
              className="todo-deadline"
              name="deadline"
              onChange={handleChangeDate}
              min={"2023-07-26"}
            />
          </form>
          {isDeadline && (
            <p className="todo-deadline-error">Choose deadline to create</p>
          )}
        </div>
        <div className="banner">
          <div className="todo-content">
            <input
              ref={inputRef}
              value={inputText}
              type="text"
              placeholder="Add todo..."
              className="todo-input"
              onChange={handleInputText}
              maxLength={3}
            />
            <button className="todo-button" type="submit" onClick={handleClick}>
              +
            </button>
            {isError && (
              <p className="todo-input-error">This field is required!</p>
            )}
          </div>
          <div className="todo-select">
            <select
              name="status"
              onChange={handleFilter}
              className="select-status"
            >
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
                setIsDeadline={setIsDeadline}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
