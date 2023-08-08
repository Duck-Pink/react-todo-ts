import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Input } from '../Input';

function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={clsx(
          'max-w-[500px] bg-[rgba(206,198,198,0.85)]',
          'p-[70px] ml-auto mr-auto mt-[150px]'
        )}
      >
        <form className={clsx('grid flex-col')}>
          <h1
            className={clsx(
              'text-left text-3xl uppercase font-semibold',
              'mb-[25px]'
            )}
          >
            Sign In
          </h1>
          <Input
            placeholder="Email..."
            type="email"
            className={clsx(
              'h-[40px]  bg-white ',
              ' text-xl',
              'mb-[14px] p-6 rounded-lg border-none'
            )}
          />
          <Input
            placeholder="Password..."
            type="password"
            className={clsx(
              'h-[40px]',
              ' text-xl bg-white ',
              'mb-[40px] p-6 rounded-lg border-none'
            )}
          />
          <button
            type="submit"
            className={clsx(
              'bg-[#ffd179]',
              'text-xl font-semibold  text-black',
              'p-3 rounded-lg',
              'cursor-pointer',
              'hover:text-white'
            )}
            onClick={() => navigate('/home')}
          >
            Sign In
          </button>
          <h4 className={clsx('text-left mt-[30px]')}>
            <span className={clsx('text-white')}>You want to add account?</span>
            <span
              className={clsx(
                'text-black',
                ' hover:cursor-pointer hover:underline'
              )}
            >
              Sign Up now.
            </span>
          </h4>
        </form>
      </div>
    </>
  );
}

export default SignUp;
