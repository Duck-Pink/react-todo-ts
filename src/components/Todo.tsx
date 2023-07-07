import "./todo.css";
import { SetStateAction } from "react";
import check from "../assets/check.svg";
import xmark from "../assets/xmark.svg";
import { ITodo } from "../interface/todo";

interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
  todos: ITodo[];
  setTodos: React.Dispatch<SetStateAction<ITodo[]>>;
}

function Todo({ id, text, completed, todos, setTodos }: TodoProps) {
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

  // check deadline

  var checkDeadline = new Date().getTime() - new Date("2023-07-10").getTime();

  return (
    <div className={`${checkDeadline === 1 ? "deadline" : "todo"}`}>
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
