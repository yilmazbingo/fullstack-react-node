import { FETCH_USER } from "../actions/types";

export default function(state = "", action) {
  switch (action.type) {
    case FETCH_USER:
      //if user not logged in it will return "" which is a falsy value.
      //so return will be "" || false =false
      return action.payload || false;
    default:
      return state;
  }
}
