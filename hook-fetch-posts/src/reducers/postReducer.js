import { FETCH_POSTS, NEW_POST } from "../actions/types";

//
// reducer function, no need set default state,
// useReducer will set init state when calling
//
export default function(state, action) {
  console.log("================== $$$$ reducer: state: ", state);
  console.log("====================== $$$$ reducer: action: ", action);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
