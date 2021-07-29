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
    case "VALIDATE":
      if (payload) {
        const tokenUser = jwt.verify(payload, process.env.REACT_APP_SECRET);
        cookie.save("auth", payload);
        return { ...state, isLoggedIn: true, user: tokenUser };
      } else {
        return state;
      }

    case "LOGOUT":
      cookie.remove("auth");
      return initialState;
    case "UPDATE ORDER":
      console.log(payload, "UPDATE ORDERS");
      return {
        ...state,
        user: { ...state.user, orders: [payload, ...state.user.orders] },
      };
    default:
      return state;
  }
}

export const register = (user) => async (dispatch) => {
  const url = `${process.env.REACT_APP_BE_URL + "register"}`;
  const response = await axios.post(url, user);

  const { token } = response.data;

  dispatch(validateToken(token));
};

export const login = (user) => async (dispatch) => {
  const url = `${process.env.REACT_APP_BE_URL + "login"}`;
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
  const token = (await cookie.load("auth")) || null;
  dispatch(validateToken(token));
};

function validateToken(token) {
  return {
    type: "VALIDATE",
    payload: token,
  };
}

export function addOrders(order) {
  console.log(order);
  return {
    type: "UPDATE ORDER",
    payload: order,
  };
}

export function logout() {
  return {
    type: "LOGOUT",
    paylod: "",
  };
}
