import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import userLogo from "../../assets/user.png";
import "./Profile.css";
import UserProfile from "./UserProfile";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="profile">
      <Nav />
      <div className="profile-body">
        <h1> User's Profile </h1>
        <div className="profile-info">
          <img src={userLogo} alt="user-logo" style={{ background: "white" }} />
          <div className="profile-details">
            <UserProfile />
            <div className="profile-button">
              <button
                className="profile-signOut"
                onClick={() => navigate("/home")}
              >
                Go Back
              </button>
              <button className="profile-signOut" onClick={() => navigate("/")}>
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
