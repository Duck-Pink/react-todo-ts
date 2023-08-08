import FormUserProfile from './FormUserProfile';
import { PenIcon } from '../icons';
import clsx from 'clsx';

function Profile() {
  return (
    <>
      <div
        className={clsx(
          'flex flex-col',
          'ml-auto mr-auto mt-20',
          ' max-w-2xl bg-[rgba(246,235,218,0.85)]',
          'px-5 py-10  rounded-lg'
        )}
      >
        <p
          className={clsx(
            'flex justify-between text-center',
            'border-b border-black',
            'mb-3 p-3'
          )}
        >
          <h1 className={clsx('text-4xl font-normal')}>User's Profile</h1>
          <button
            className={clsx(
              'flex items-center justify-center',
              'w-[100px] h-[40px] bg-[#ffd179]',
              'font-semibold cursor-pointer rounded-lg'
            )}
          >
            Edit <PenIcon />
          </button>
        </p>
        <FormUserProfile />
      </div>
    </>
  );
}

export default Profile;
