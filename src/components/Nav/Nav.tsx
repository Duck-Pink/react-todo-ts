import "./Nav.css";
import user from "../../assets/user.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <img
        src={logo}
        alt="logo"
        className="nav-logo"
        onClick={() => navigate("/home")}
      />
      <img
        src={user}
        alt="user"
        className="nav-user"
        onClick={() => navigate("/profile")}
      />
    </div>
  );
}

export default Nav;
