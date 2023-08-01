import "./TodoList.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Todo from "./Todo";
import { ITodo } from "../../interface/todo";

function TodoList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [value, setValue] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isDeadline, setIsDeadline] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDeadline(false);
    setDate(e.target.value);
  };

  const handleClick = () => {
    if (!value) {
      setIsError(true);
      return;
    }
    if (!date) {
      setIsDeadline(true);
      return;
    }
    const newTodo: ITodo = {
      id: Math.random() * 100,
      text: value,
      completed: false,
      value: date,
    };
    setTodos([...todos, newTodo]);
    setDate("");
    setValue("");
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
    const localStorageTodos = localStorage.getItem("todos");
    const todosLocal = localStorageTodos ? JSON.parse(localStorageTodos) : [];
    setTodos(todosLocal);
  };

  useEffect(() => {
    getLocalTodos();
  }, []);

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    setValue(e.currentTarget.value);
  };

  // complete
  const handleComplete = (id: number) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      })
    );
  };

  // delete
  const handleDelete = (id: number) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  return (
    <>
      <div className="todo-list">
        <div className="header">
          <h1 className="todo-title"> Todo List </h1>
        </div>
        <div className="banner">
          <div className="todo-content">
            <input
              ref={inputRef}
              value={value}
              type="text"
              placeholder="Add todo..."
              className="todo-input"
              onChange={handleValue}
              maxLength={5}
            />
            <button className="todo-button" type="submit" onClick={handleClick}>
              +
            </button>
            {isError && (
              <p className="todo-input-error">This field is required!</p>
            )}
          </div>
          <form className="form-deadline">
            <h2>Deadline :</h2>
            <input
              type="date"
              className="todo-deadline"
              name="deadline"
              value={date}
              onChange={handleChangeDate}
              min={"2023-08-01"}
            />
          </form>
          {isDeadline && (
            <p className="todo-deadline-error">Choose deadline to create</p>
          )}
        </div>
      </div>
      <div className="todo-select">
        <select name="status" onChange={handleFilter} className="select-status">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="uncomplete">Uncomplete</option>
        </select>
      </div>
      <div className="container">
        <ul className="list">
          {todos.map((todo, index) => {
            const { text, id, completed, value } = todo;
            return (
              <Todo
                id={id}
                key={index}
                text={text}
                completed={completed}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                value={value}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
