import { useEffect, useState } from "react";
import { Pen } from "../icons";
import "./UserProfile.css";
import { SubmitHandler, useForm } from "react-hook-form";
import InputName from "../icons/InputName";
import InputEmail from "../icons/InputEmail";
import InputPhone from "../icons/InputPhone";
import InputAddress from "../icons/InputAddress";

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
          <InputName />
          <Pen />
        </div>
        <div className="user-profile">
          <label>Email: </label>
          <InputEmail />
          <Pen />
        </div>
        <div className="user-profile">
          <label htmlFor="male">Male</label>:
          <input type="radio" id="male" name="sex" value="" />
          <label htmlFor="female">Female</label>:
          <input type="radio" id="female" name="sex" value="" />
        </div>
        <div className="user-profile">
          <label>Birthday: </label>
          <input type="date" style={{ background: "none", border: "none" }} />
          <Pen />
        </div>
        <div className="user-profile">
          <label>Phone Number: </label>
          <InputPhone />
          <Pen />
        </div>
        <div className="user-profile">
          <label>Address: </label>
          <InputAddress />
          <Pen />
        </div>
        <button className="user-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
