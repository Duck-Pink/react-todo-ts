import { useEffect, useState } from "react";
import "./FormUserProfile.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import userLogo from "../../assets/user.png";
import { convertBase64 } from "../../helpers/base64";

interface UserProps {
  name: string;
  email: string;
  phone: number;
  address: string;
}

const initalUser: UserProps = {
  name: "Bui Quang Huong",
  email: "buiquanghuong01@gmail.com",
  phone: 999999999,
  address: "Ha Noi",
};

function UserProfile() {
  const [user, setUser] = useState(initalUser);
  const [img, setImg] = useState(userLogo);
  const { handleSubmit, register } = useForm<UserProps>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<UserProps> = (data: UserProps) =>
    console.log(data);

  const saveLocalUser = () => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    saveLocalUser();
  }, []);

  const getLocalUser = () => {
    const localStorageUser = localStorage.getItem("user");
    const userLocal = localStorageUser ? JSON.parse(localStorageUser) : [];
    setUser(userLocal);
  };

  useEffect(() => {
    getLocalUser();
  }, []);

  const handleUser = (e: any) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUploadImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return null;
    const base64Img = await convertBase64(files[0]);
    setImg(base64Img as any);
  };

  return (
    <div className="user">
      <form className="user-avatar">
        <img className="avatar" src={img} alt="user-logo" />
        <label htmlFor="files" className="user-button-change">
          Change Avatar
        </label>
        <Input
          id="files"
          type="file"
          name="avatar"
          onChange={handleUploadImg}
          className="user-change-avatar"
        />
      </form>
      <form onSubmit={handleSubmit(onSubmit)} className="profile-details">
        <div className="user-profile">
          <label>Full Name: </label>
          <Input
            {...register("name")}
            className="input-name"
            type="text"
            value={user.name}
            onChange={(e) => handleUser(e)}
          />
        </div>
        <div className="user-profile">
          <label>Email: </label>
          <Input
            {...register("email")}
            className="input-email"
            type="text"
            value={user.email}
            onChange={(e) => handleUser(e)}
          />
        </div>
        <div className="user-profile">
          <p>Gender :</p>
          <span>
            <Input
              className="input-radio"
              type="radio"
              id="male"
              name="sex"
              checked
            />
            <label htmlFor="male">Male</label>
          </span>
          <span>
            <Input
              className="input-radio"
              type="radio"
              id="female"
              name="sex"
            />
            <label htmlFor="female">Female</label>
          </span>
        </div>
        <div className="user-profile">
          <label>Birthday: </label>
          <Input type="date" className="input-birthday" />
        </div>
        <div className="user-profile">
          <label>Phone Number: </label>
          <Input
            {...register("phone")}
            className="input-phone"
            type="number"
            value={user.phone}
            onChange={(e) => handleUser(e)}
          />
        </div>
        <div className="user-profile">
          <label>Address: </label>
          <Input
            {...register("address")}
            className="input-address"
            type="text"
            value={user.address}
            onChange={(e) => handleUser(e)}
          />
        </div>
        <div className="user-buttons">
          <button className="user-button" type="submit" value="submit">
            Save
          </button>
          <button className="user-button" onClick={() => navigate("/home")}>
            Go Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
