import { addOrders } from "./user-store";

const axios = require("axios");

// Initial State
const initialState = {
  itemList: [],
  subtotal: 0,
};

// Reducer Function
// action is an object with: type and payload
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      if (state.itemList.includes(payload)) {
        payload.cartQuantity += 1;
        return {
          ...state,
          itemList: [...state.itemList],
          subtotal: Math.round((state.subtotal += payload.price) * 100) / 100,
        };
      }
      payload.cartQuantity = payload.cartQuantity
        ? (payload.cartQuantity += 1)
        : 1;

      return {
        ...state,
        itemList: [...state.itemList, payload],
        subtotal: Math.round((state.subtotal += payload.price) * 100) / 100,
      };
    case "SUBTRACT":
      if (payload.cartQuantity && payload.cartQuantity > 0) {
        payload.cartQuantity -= 1;
        const newSubtotal =
          Math.round((state.subtotal -= payload.price) * 100) / 100;
        state.subtotal = newSubtotal;
      }
      if (payload.cartQuantity < 1) {
        const newList = state.itemList.filter(
          (item) => item._id !== payload._id
        );

        return { ...state, itemList: newList };
      }
      return {
        ...state,
        itemList: [...state.itemList],
      };
    case "CLEAR CART":
      return { ...initialState, subtotal: 0 };

    case "REMOVE":
      let subtotal;
      const newState = state.itemList.filter((item) => {
        subtotal = item.cartQuantity * item.price;
        if (item._id === payload) {
          subtotal = state.subtotal - subtotal;
        }
        if (item._id !== payload) {
          return item;
        }
        return 0;
      });
      console.log(newState);
      return { ...state, subtotal: subtotal, itemList: newState };

    default:
      return state;
  }
}

export const updateOrders = (order, user) => async (dispatch) => {
  console.log(order);
  console.log(user);
  const url = `${process.env.REACT_APP_BE_URL + "order"}`;
  const response = await axios.put(url, { order: order, user: user.email });
  console.log(response);

  dispatch(addOrders(response.data.orders));
  dispatch(clearCart());
};

// Action Creators

export function add(product) {
  return {
    type: "ADD",
    payload: product,
  };
}

export function subtract(product) {
  return {
    type: "SUBTRACT",
    payload: product,
  };
}

export function clearCart() {
  return {
    type: "CLEAR CART",
  };
}

export function removeFromCart(id) {
  return {
    type: "REMOVE",
    payload: id,
  };
}
