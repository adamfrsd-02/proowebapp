import axios from "axios";
import {
  GET_PAKET
} from "./types";


export const getPaket = () => (dispatch) => {
  axios
    .get("https://server.proo.co.id/api/menuProo")
    .then((res) => {
      console.log("Success Paket :", res.data);
      dispatch({
        type: GET_PAKET,
        payload: res.data
      });
    })
    .catch((err) => console.log("Error Paket :", err));
};