import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import userLogo from "../../assets/user.png";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="profile">
      <Nav />
      <div className="profile-body">
        <h1> User's Profile </h1>
        <div className="profile-info">
          <img src={userLogo} alt="user-logo" />
          <div className="profile-details">
            <div className="profile-button">
              <button className="profile-signOut" onClick={() => navigate("/")}>
                Go Back
              </button>
              <button
                className="profile-signOut"
                onClick={() => navigate("/signup")}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
