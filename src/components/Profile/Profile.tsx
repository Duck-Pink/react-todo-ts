import "./Profile.css";
import FormUserProfile from "./FormUserProfile";
import { PenIcon } from "../icons";

function Profile() {
  return (
    <>
      <div className="profile-body">
        <p className="profile-body-title">
          <h1>User's Profile</h1>
          <button className="profile-button-edit">
            Edit <PenIcon />
          </button>
        </p>
        <FormUserProfile />
      </div>
    </>
  );
}

export default Profile;
