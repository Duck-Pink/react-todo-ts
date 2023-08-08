import { ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

const Input = ({ className, ...props }: ComponentPropsWithoutRef<'input'>) => {
  return (
    <input
      className={clsx('border-b border-black', 'text-lg', className)}
      {...props}
    />
  );
};
export default Input;
