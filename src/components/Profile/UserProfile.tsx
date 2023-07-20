import { useEffect, useState } from "react";
import { PenIcon } from "../icons";
import "./UserProfile.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputProfile } from "../Input";

interface UserProps {
  name: string;
  email: string;
  phone: number;
  address: string;
  birthday: Date;
}

function UserProfile() {
  const [user, setUser] = useState<UserProps[]>([]);
  const { handleSubmit } = useForm<UserProps>();
  const onSubmit: SubmitHandler<UserProps> = (data: UserProps) =>
    console.log(data);

  const saveLocalUser = () => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  useEffect(() => {
    saveLocalUser();
  }, []);

  const getLocalUser = () => {
    if (localStorage.getItem("user") === null) {
      localStorage.setItem("user", JSON.stringify([]));
    } else {
      const localStorageUser = localStorage.getItem("user");
      if (localStorageUser === null) {
        return;
      }
      let todoLocal = JSON.parse(localStorageUser);
      setUser(todoLocal);
    }
  };

  useEffect(() => {
    getLocalUser();
  }, []);

  return (
    <div className="user">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-profile">
          <label>Full Name: </label>
          <InputProfile />
          <PenIcon />
        </div>
        <div className="user-profile">
          <label>Email: </label>
          <InputProfile />
          <PenIcon />
        </div>
        <div className="user-profile">
          <p>Gender :</p>
          <span>
            <input type="radio" id="male" name="sex" value="" />
            <label htmlFor="male">Male</label>
          </span>
          <span>
            <input type="radio" id="female" name="sex" value="" />
            <label htmlFor="female">Female</label>
          </span>
        </div>
        <div className="user-profile">
          <label>Birthday: </label>
          <input
            type="date"
            style={{ background: "none", border: "none", fontSize: "18px" }}
          />
          <PenIcon />
        </div>
        <div className="user-profile">
          <label>Phone Number: </label>
          <InputProfile />
          <PenIcon />
        </div>
        <div className="user-profile">
          <label>Address: </label>
          <InputProfile />
          <PenIcon />
        </div>
        <button className="user-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
