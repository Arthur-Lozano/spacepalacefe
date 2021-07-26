import axios from "axios";

// Initial State
const initialState = [];

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
      console.log(payload);
      return payload;
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

function initialize(data) {
  return {
    type: "FETCH",
    payload: data,
  };
}
