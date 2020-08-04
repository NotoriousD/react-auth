import { LOGIN_USER, LOGOUT_USER } from "./actions";

const defaultAuth = {
  currentUser: {
    token: localStorage.getItem("token"),
    name: "",
    email: "",
    password: "",
    isAuth: false,
  },
};

export const authReducers = (state = defaultAuth, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: state,
      };
    default:
      return defaultAuth;
  }
};
