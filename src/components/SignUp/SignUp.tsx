import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <div className="signup">
        <form>
          <h1> Sign In</h1>
          <input placeholder="Email..." type="email" className="signup-input" />
          <input
            placeholder="Password..."
            type="password"
            className="signup-input"
          />
          <button type="submit" onClick={() => navigate("/home")}>
            Sign In
          </button>
          <h4>
            <span className="signup-white">You want to add account?</span>
            <span className="signup-link">Sign Up now.</span>
          </h4>
        </form>
      </div>
    </>
  );
}

export default SignUp;
