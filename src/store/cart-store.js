// Initial State
const initialState = [];

// Reducer Function
// action is an object with: type and payload
export default function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET":
      // filter the state by the payload
      return initialState.filter((person) => {
        return payload ? person.role === payload : true;
      });
    case "ADD":
      return state;
    default:
      return initialState;
  }
}

// Action Creators

// maybe this could get a person?
export function get(role) {
  return {
    type: "GET",
    payload: role,
  };
}
