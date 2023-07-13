import { useForm } from "react-hook-form";
import "./SignUp.css";
import { useState } from "react";
import TodoList from "../Row/TodoList";

interface User {
  email: string;
  password: string;
}

function SignUp() {
  const [signIn, setSignIn] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <>
      {signIn ? (
        <TodoList />
      ) : (
        <div className="signup">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1> Sign In</h1>
            <input
              placeholder="Email..."
              type="email"
              className="signup-input"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <input
              placeholder="Password..."
              type="password"
              className="signup-input"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <button type="submit" onClick={() => setSignIn(true)}>
              Sign In
            </button>
            <h4>
              <span className="signup-white">You want to add account?</span>
              <span className="signup-link">Sign Up now.</span>
            </h4>
          </form>
        </div>
      )}
    </>
  );
}

export default SignUp;
