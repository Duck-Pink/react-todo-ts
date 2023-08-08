import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../Input';
import { useNavigate } from 'react-router-dom';
import userLogo from '../../assets/user.png';
import { convertBase64 } from '../../helpers/base64';
import clsx from 'clsx';

interface UserProps {
  name: string;
  email: string;
  phone: number;
  address: string;
}

const initalUser: UserProps = {
  name: 'Bui Quang Huong',
  email: 'buiquanghuong01@gmail.com',
  phone: 999999999,
  address: 'Ha Noi',
};

function UserProfile() {
  const [user, setUser] = useState(initalUser);
  const [img, setImg] = useState(userLogo);
  const { handleSubmit, register } = useForm<UserProps>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserProps> = (data: UserProps) =>
    console.log(data);

  const saveLocalUser = () => {
    localStorage.setItem('user', JSON.stringify(user));
  };

  useEffect(() => {
    saveLocalUser();
  }, []);

  const getLocalUser = () => {
    const localStorageUser = localStorage.getItem('user');
    const userLocal = localStorageUser ? JSON.parse(localStorageUser) : [];
    setUser(userLocal);
  };

  useEffect(() => {
    getLocalUser();
  }, []);

  const handleUser = (e: any) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUploadImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return null;
    const base64Img = await convertBase64(files[0]);
    setImg(base64Img as any);
  };

  return (
    <div className={clsx('flex text-lg')}>
      <form className={clsx('w-32', ' border-r border-black')}>
        <img className={clsx('w-24 h-24 pl-2')} src={img} alt="user-logo" />
        <label
          htmlFor="files"
          className={clsx(
            'block w-[105px] mt-2 p-1 bg-[#ffd179]',
            ' text-sm cursor-pointer rounded-lg',
            ' hover:text-white'
          )}
        >
          Change Avatar
        </label>
        <Input
          id="files"
          type="file"
          name="avatar"
          onChange={handleUploadImg}
          className={clsx('invisible')}
        />
      </form>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx('w-full pl-[20px]')}
      >
        <div
          className={clsx(
            'flex justify-between items-center bg-white',
            'p-2 rounded-lg mb-3'
          )}
        >
          <label>Full Name: </label>
          <Input
            {...register('name')}
            className={clsx('w-[80%]')}
            type="text"
            value={user.name}
            onChange={(e) => handleUser(e)}
          />
        </div>
        <div
          className={clsx(
            'flex justify-between items-center bg-white',
            'p-2 rounded-lg mb-3'
          )}
        >
          <label>Email: </label>
          <Input
            {...register('email')}
            className={clsx('w-[88%]')}
            type="text"
            value={user.email}
            onChange={(e) => handleUser(e)}
          />
        </div>
        <div
          className={clsx(
            'flex justify-between items-center bg-white',
            'p-2 rounded-lg mb-3'
          )}
        >
          <p>Gender :</p>
          <span>
            <Input
              className={clsx('mr-1')}
              type="radio"
              id="male"
              name="gender"
              checked
            />
            <label htmlFor="male">Male</label>
          </span>
          <span>
            <Input
              className={clsx('mr-1')}
              type="radio"
              id="female"
              name="gender"
            />
            <label htmlFor="female">Female</label>
          </span>
        </div>
        <div
          className={clsx(
            'flex justify-between items-center bg-white',
            'p-2 rounded-lg mb-3'
          )}
        >
          <label>Birthday: </label>
          <Input type="date" className={clsx('border-none')} />
        </div>
        <div
          className={clsx(
            'flex justify-between items-center bg-white',
            'p-2 rounded-lg mb-3'
          )}
        >
          <label>Phone Number: </label>
          <Input
            {...register('phone')}
            className={clsx('w-[72%]')}
            type="number"
            value={user.phone}
            onChange={(e) => handleUser(e)}
          />
        </div>
        <div
          className={clsx(
            'flex justify-between items-center bg-white',
            'p-2 rounded-lg mb-3'
          )}
        >
          <label>Address: </label>
          <Input
            {...register('address')}
            className={clsx('w-[83%]')}
            type="text"
            value={user.address}
            onChange={(e) => handleUser(e)}
          />
        </div>
        <div className={clsx('flex pt-5 justify-around')}>
          <button
            className={clsx(
              'w-[100px] h-[40px] bg-[#ffd179] ',
              'font-semibold cursor-pointer rounded-lg',
              'hover:text-white'
            )}
            type="submit"
            value="submit"
          >
            Save
          </button>
          <button
            className={clsx(
              'w-[100px] h-[40px] bg-[#ffd179] ',
              'font-semibold cursor-pointer rounded-lg',
              'hover:text-white'
            )}
            onClick={() => navigate('/home')}
          >
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
