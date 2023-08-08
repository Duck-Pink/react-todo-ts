import "./todo.css";
import { CheckIcon, XmarkIcon } from "../icons";

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  handleComplete: (id: number) => void;
  handleDelete: (id: number) => void;
  value: string;
}

function Todo({
  id,
  text,
  completed,
  handleComplete,
  handleDelete,
  value,
}: TodoProps) {
  // deadline
  const deadline: number = Math.ceil(
    (new Date(value).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

  return (
    <div className={`${deadline === 1 ? "deadline" : "todo"}`}>
      <li key={id} className={`todo-item ${completed ? "completed" : ""}`}>
        <label>Todo: {text} </label>
        <label>Date: {value}</label>
        <label>Deadline: {deadline} day</label>
      </li>
      <button className="btn-complete" onClick={() => handleComplete(id)}>
        <CheckIcon />
      </button>
      <button className="btn-delete" onClick={() => handleDelete(id)}>
        <XmarkIcon />
      </button>
    </div>
  );
}

export default Todo;
