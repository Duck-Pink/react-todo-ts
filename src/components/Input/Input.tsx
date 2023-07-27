import { ComponentPropsWithoutRef } from "react";
import "./Input.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

const Input = ({ ...props }: InputProps) => {
  return <input {...props} />;
};
export default Input;
