import user from '../../assets/user.png';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';

function Nav() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={clsx('p-5')}>
      <img
        src={logo}
        alt="logo"
        className={clsx('fixed w-10 cursor-pointer')}
        onClick={() => navigate('/home')}
      />
      <img
        src={user}
        alt="user"
        className={clsx('fixed right-7 w-10', ' cursor-pointer object-contain')}
        onClick={handleClick}
      />
      {open && (
        <div>
          <ul
            className={clsx(
              'absolute right-px top-16',
              ' bg-[rgba(246,235,218,0.5)] p-2 rounded-lg'
            )}
          >
            <li>
              <button
                onClick={() => navigate('/profile')}
                className={clsx(
                  ' w-20 bg-[#ffd179]',
                  ' mb-1 rounded-lg p-1',
                  'hover:text-white'
                )}
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate('/')}
                className={clsx(
                  ' w-20 bg-[#ffd179]',
                  ' rounded-lg p-1',
                  'hover:text-white'
                )}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
