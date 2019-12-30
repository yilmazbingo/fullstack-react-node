import axios from "axios";
import { FETCH_USER } from "./types";

// const fetchUser =async () => {
//   const request = await axios.get("/api/current_user");

//   return {
//     type: FETCH_USER,
//     payload: request
//   };
// };

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

//we are making post request because we want to send some information along with the request.
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
