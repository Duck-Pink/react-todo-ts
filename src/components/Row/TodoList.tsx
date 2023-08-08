import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Todo from './Todo';
import { ITodo } from '../../interface/todo';
import clsx from 'clsx';

function TodoList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isDeadline, setIsDeadline] = useState<boolean>(false);
  const [date, setDate] = useState<string>('');

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
    setDate('');
    setValue('');
    inputRef.current?.focus();
  };

  //select option
  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    switch (value) {
      case 'complete':
        setTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncomplete':
        setTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setTodos(todos);
        break;
    }
  };

  //save
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  useEffect(() => {
    saveLocalTodos();
  }, []);

  const getLocalTodos = () => {
    const localStorageTodos = localStorage.getItem('todos');
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
      <div>
        <h1
          className={clsx(
            'flex justify-center items-center',
            'h-[150px]',
            'text-5xl'
          )}
        >
          Todo List
        </h1>
      </div>
      <div className={clsx('flex justify-center items-center', 'mb-[35px]')}>
        <div className={clsx('pr-[10px]')}>
          <input
            ref={inputRef}
            value={value}
            type="text"
            placeholder="Add todo..."
            className={clsx(
              'w-[16rem] bg-white text-lg',
              'p-[12px] rounded-l-lg'
            )}
            onChange={handleValue}
            maxLength={5}
          />
          <button
            className={clsx(
              ' bg-[#ffd179] text-lg',
              'cursor-pointer',
              'p-[12px] rounded-r-lg',
              'hover:bg-[#ffb86c] hover:text-white'
            )}
            type="submit"
            onClick={handleClick}
          >
            +
          </button>
          {isError && (
            <p className={clsx('absolute text-lg text-red-600 ', ' p-[5px]')}>
              This field is required!
            </p>
          )}
        </div>
        <form className={clsx('flex justify-center items-center')}>
          <h2 className={clsx(' bg-white text-lg ', 'p-[12px] rounded-l-lg')}>
            Deadline :
          </h2>
          <input
            type="date"
            className={clsx(
              'bg-white text-lg ',
              ' p-[11px] rounded-r-lg cursor-pointer'
            )}
            name="deadline"
            value={date}
            onChange={handleChangeDate}
            min={'2023-08-01'}
          />
        </form>
        {isDeadline && (
          <p
            className={clsx(
              'absolute top-1/4 left-2/4',
              ' p-[5px] ',
              'text-lg text-red-600'
            )}
          >
            Choose deadline to create
          </p>
        )}
      </div>
      <div
        className={clsx('flex justify-center ', ' mb-[10px] overflow-hidden')}
      >
        <select
          name="status"
          onChange={handleFilter}
          className={clsx('w-[8rem]', 'rounded-lg p-[8px]', 'cursor-pointer')}
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="uncomplete">Uncomplete</option>
        </select>
      </div>
      <div className={clsx('ml-auto mr-auto', 'w-[480px]', 'rounded-lg')}>
        <ul className={clsx('list-none max-h-[300px]')}>
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
