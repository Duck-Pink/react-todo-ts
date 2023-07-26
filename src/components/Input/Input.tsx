import { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  className?: string;
  type?: string;
  style?: React.CSSProperties;
  id?: string;
  value?: string | number;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  checked?: boolean;
}

const InputProfile = ({
  type,
  className,
  style,
  id,
  name,
  value,
  onChange,
  checked,
}: InputProps) => {
  return (
    <input
      className={className}
      type={type}
      style={style}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
    />
  );
};
export default InputProfile;
