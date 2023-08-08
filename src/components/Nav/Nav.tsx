import "./Nav.css";
import user from "../../assets/user.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="nav">
      <img
        src={logo}
        alt="logo"
        className="nav-logo"
        onClick={() => navigate("/home")}
      />
      <img src={user} alt="user" className="nav-user" onClick={handleClick} />
      {open && (
        <div className="nav-dropdown">
          <ul className="nav-logo-user">
            <li>
              <button
                onClick={() => navigate("/profile")}
                className="nav-button-profile"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/")}
                className="nav-button-signout"
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
