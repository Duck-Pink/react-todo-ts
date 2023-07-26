import { useEffect, useState } from "react";
import "./UserProfile.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";

interface UserProps {
  name: string;
  email: string;
  phone: number;
  address: string;
  birthday: Date;
}

const initalUser: UserProps = {
  name: "Bui Quang Huong",
  email: "buiquanghuong01@gmail.com",
  phone: 999999999,
  address: "Ha Noi",
  birthday: new Date(2001, 1, 1),
};

function UserProfile() {
  const [user, setUser] = useState<UserProps[]>([initalUser]);
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
          <Input
            className="user-input input-name"
            type="text"
            value={initalUser.name}
          />
        </div>
        <div className="user-profile">
          <label>Email: </label>
          <Input
            className="user-input input-email"
            type="text"
            value={initalUser.email}
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
            className="user-input input-phone"
            type="number"
            value={initalUser.phone}
          />
        </div>
        <div className="user-profile">
          <label>Address: </label>
          <Input
            className="user-input input-address"
            type="text"
            value={initalUser.address}
          />
        </div>
        <button className="user-button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
