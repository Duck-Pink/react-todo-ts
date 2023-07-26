import { useNavigate } from "react-router-dom";
import Nav from "../Nav/Nav";
import userLogo from "../../assets/user.png";
import "./Profile.css";
import UserProfile from "./UserProfile";
import { Input } from "../Input";
import { useState } from "react";
import { convertBase64 } from "../../helpers/base64";
import { PenIcon } from "../icons";

function Profile() {
  const navigate = useNavigate();

  const [img, setImg] = useState(userLogo);

  const handleUploadImg = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = event.target;
    if (!files) return null;
    const base64Img = await convertBase64(files[0]);
    setImg(base64Img as any);
  };

  // <label for="files" class="btn">Select Image</label>
  //   <input id="files" style="visibility:hidden;" type="file"></input>

  return (
    <div className="profile">
      <Nav />
      <div className="profile-body">
        <p className="profile-body-title">
          <h1>User's Profile</h1>
          <button className="profile-button-edit">
            Edit <PenIcon />
          </button>
        </p>
        <div className="profile-info">
          <form className="profile-avatar">
            <img className="avatar" src={img} alt="user-logo" />
            <label
              htmlFor="files"
              className="profile-button-change"
              style={{ width: "100px" }}
            >
              Change Avatar
            </label>
            <Input
              id="files"
              type="file"
              name="avatar"
              onChange={handleUploadImg}
              className="change-avatar"
            />
          </form>
          <div className="profile-details">
            <UserProfile />
            <div className="profile-button">
              <button
                className="profile-home"
                onClick={() => navigate("/home")}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
