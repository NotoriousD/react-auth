import axios from "axios";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = (isAuth) => ({
  type: LOGIN_USER,
  payload: isAuth,
});

export const userLoginFetch = (email, password) => {
  console.log(email, password);
  return (dispatch) => {
    return axios
      .post(
        `https://winningpartner.com:26134/api/v2/login?user[email]=${email}&user[password]=${password}`
      )
      .then((res) => {
        let user = {
          token: res.data.token,
          name: res.data.full_name,
          email: email,
          password: password,
          isAuth: true,
        };
        localStorage.setItem("token", res.data.token);
        dispatch(loginUser(user));
      });
  };
};

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
