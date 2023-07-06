import dayjs from "dayjs";
import "./todo.css";
import { useState } from "react";

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

function Todo({ id, text, completed }: TodoProps) {
  console.log("completed", completed);
  const [todos, setTodos] = useState<TodoProps[]>([]);

  const handleToggle = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo">
      <li
        key={id}
        onClick={handleToggle}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {text}
        <br />
        <span>
          {"Time"}
          {dayjs(new Date().getTime()).format(" HH:mm:ss")}
        </span>
      </li>
      <button className="btn-check">Com</button>
      <button className="btn-trash">Del</button>
    </div>
  );
}

export default Todo;
