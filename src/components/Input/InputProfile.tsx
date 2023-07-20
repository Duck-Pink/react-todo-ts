import { ComponentPropsWithoutRef } from "react";
import "./InputProfile.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  className?: string;
}

const InputProfile = ({ type }: InputProps) => {
  return <input className="input" type={type}></input>;
};
export default InputProfile;
