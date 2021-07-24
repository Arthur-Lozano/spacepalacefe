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
  const auth = base64.encode(`${user.email}:${user.password}}`);
  const response = await axios.post(url, user);
};

function saveUser(data) {
  return {
    type: "REGISTER",
    payload: data,
  };
}
