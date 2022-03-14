import axios from "axios";
import { GET_PELAJARAN } from "./types";

export const getPelajaran = () => (dispatch) => {
  axios
    .get("https://admin.proo.co.id/api/pelajaran")
    .then((res) => {
      console.log("Success Pelajaran :", res.data);
      dispatch({
        type: GET_PELAJARAN,
        payload: res.data,
      });
    })
    .catch((err) => console.log("Error Pelajaran :", err));
};
