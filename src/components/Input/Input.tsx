import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import './Input.css';

const Input = ({ className, ...props }: ComponentPropsWithoutRef<'input'>) => {
  return <input className={clsx('input', className)} {...props} />;
};
export default Input;
