import "./todo.css";
import { SetStateAction } from "react";
import check from "../assets/check.svg";
import xmark from "../assets/xmark.svg";
import { ITodo } from "../interface/todo";
import dayjs from "dayjs";

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  todos: ITodo[];
  setTodos: React.Dispatch<SetStateAction<ITodo[]>>;
  date: any;
}

function Todo({ id, text, completed, todos, setTodos, date }: TodoProps) {
  // complete
  const handleComplete = () => {
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
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  // deadline

  const deadline = Math.ceil(
    (new Date(date).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

  return (
    <div className={`${deadline <= 1 ? "deadline" : "todo"}`}>
      <li key={id} className={`todo-item ${completed ? "completed" : ""}`}>
        {text}
        <p>{dayjs(new Date().getTime()).format("YYYY-MM-DD")}</p>
        <span>deadline: {deadline}</span>
      </li>
      <button className="btn-complete" onClick={handleComplete}>
        <img src={check} alt="check" style={{ pointerEvents: "none" }} />
      </button>
      <button className="btn-delete" onClick={handleDelete}>
        <img src={xmark} alt="xamrk" style={{ pointerEvents: "none" }} />
      </button>
    </div>
  );
}

export default Todo;
