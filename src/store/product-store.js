import axios from "axios";

// Initial State
const initialState = {
  listOfProducts: [],
  productDetail: {},
};

// Reducer Function
// action is an object with: type and payload
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "CATEGORY":
      // filter the state by the payload
      console.log(payload);
      if (!payload) {
        return initialState;
      }
      let listByCategory = initialState.filter(
        (item) => item.category === payload
      );
      return listByCategory;
    case "FETCH":
      return { ...state, listOfProducts: payload };

    case "GET PRODUCT":
      console.log(state);
      console.log(payload);
      state.listOfProducts.forEach((item) => {
        if (item._id === payload) {
          return { ...state, productDetail: item };
        } else {
          return null;
        }
      });

    default:
      return state;
  }
}

export const fetch = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_BE_URL + "products"}`;
  const response = await axios.get(url);

  dispatch(initialize(response.data));
};

// Action Creators
export function switchCategory(category) {
  return {
    type: "CATEGORY",
    payload: category,
  };
}

export function getOneProduct(id) {
  return {
    type: "GET PRODUCT",
    payload: id,
  };
}

function initialize(data) {
  return {
    type: "FETCH",
    payload: data,
  };
}
