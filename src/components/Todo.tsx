import dayjs from "dayjs";
import "./todo.css";
import { useState } from "react";
import check from "../assets/check.svg";
import xmark from "../assets/xmark.svg";

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

function Todo({ id, text, completed }: TodoProps) {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  // complete
  const completeHandler = () => {
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
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== id));
    console.log("setTodos", setTodos);
  };

  return (
    <div className="todo">
      <li key={id} className={`todo-tiem ${completed ? "completed" : ""}`}>
        {text}
        {/* <br />
        <span>
          {"Time"}
          {dayjs(new Date().getTime()).format(" HH:mm:ss")}
        </span> */}
      </li>
      <button className="btn-complete" onClick={completeHandler}>
        <img src={check} alt="check" style={{ pointerEvents: "none" }} />
      </button>
      <button className="btn-delete" onClick={deleteHandler}>
        <img src={xmark} alt="xamrk" style={{ pointerEvents: "none" }} />
      </button>
    </div>
  );
}

export default Todo;
