// Initial State
const initialState = [];

// Reducer Function
// action is an object with: type and payload
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      console.log(payload);

      return [...state, payload];
    case "TOTAL":
      state.forEach((item) => {
        console.log(item.price);
      });
      return state;
    default:
      return state;
  }
}

// Action Creators

export function add(product) {
  return {
    type: "ADD",
    payload: product,
  };
}

export function total() {
  return {
    type: "TOTAL",
  };
}
