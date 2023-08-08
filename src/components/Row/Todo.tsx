import { CheckIcon, XmarkIcon } from '../icons';
import clsx from 'clsx';

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
    <div
      className={`${
        deadline === 1
          ? 'flex items-center justify-between mb-[10px] bg-white rounded-lg text-red-600'
          : 'flex items-center justify-between mb-[10px] bg-white rounded-lg text-black'
      }`}
    >
      <li
        key={id}
        className={`flex justify-between w-96 p-[7px] ${
          completed ? 'line-through opacity-[0.5]' : ''
        }`}
      >
        <label>Todo: {text} </label>
        <label>Date: {value}</label>
        <label>Deadline: {deadline} day</label>
      </li>
      <button
        className={clsx(
          'flex items-center',
          ' bg-white ',
          'text-xl px-2 py-3',
          'cursor-pointer',
          ' hover:bg-lime-500'
        )}
        onClick={() => handleComplete(id)}
      >
        <CheckIcon />
      </button>
      <button
        className={clsx(
          'flex items-center',
          ' bg-white text-xl ',
          ' px-2 py-3',
          'cursor-pointer rounded-r-lg',
          'hover:bg-red-500'
        )}
        onClick={() => handleDelete(id)}
      >
        <XmarkIcon />
      </button>
    </div>
  );
}

export default Todo;
