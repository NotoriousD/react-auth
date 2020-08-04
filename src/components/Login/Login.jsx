import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoginFetch } from "../../store/auth/actions";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(userLoginFetch(user.email, user.password));
        }}
      >
        <label>
          <span>media@trafficlabel.com</span>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>24SK5gdKv8j2gaJ9</span>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
