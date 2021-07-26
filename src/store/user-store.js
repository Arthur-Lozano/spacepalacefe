import jwt from "jsonwebtoken";
import cookie from "react-cookies";
import base64 from "base-64";

const axios = require("axios");

const initialState = {
  isLoggedIn: false,
  user: {},
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "REGISTER":
      console.log(payload);
      return payload;

    case "VALIDATE":
      if (payload) {
        const tokenUser = jwt.verify(payload, process.env.REACT_APP_SECRET);
        cookie.save("auth", payload);
        return { ...state, isLoggedIn: true, user: tokenUser };
      } else {
        return state;
      }

    case "LOGOUT":
      console.log("INSIDE LOGOUT STORE");
      cookie.remove("auth");
      return initialState;
    default:
      return state;
  }
}

export const register = (user) => async (dispatch) => {
  const url = "http://localhost:3333/register";
  const response = await axios.post(url, user);

  dispatch(saveUser(response.data));
};

export const login = (user) => async (dispatch) => {
  const url = "http://localhost:3333/login";
  const auth = base64.encode(`${user.email}:${user.password}`);
  try {
    const response = await axios.post(url, user, {
      headers: { authorization: `Basic ${auth}` },
    });
    const { token } = response.data;

    dispatch(validateToken(token));
  } catch (e) {
    console.warn("Login Attempt Failed");
  }
};

export const initial = () => async (dispatch) => {
  const token = cookie.load("auth") || null;
  dispatch(validateToken(token));
};

function saveUser(data) {
  return {
    type: "REGISTER",
    payload: data,
  };
}

function validateToken(token) {
  return {
    type: "VALIDATE",
    payload: token,
  };
}

export function logout() {
  return {
    type: "LOGOUT",
    paylod: "",
  };
}
