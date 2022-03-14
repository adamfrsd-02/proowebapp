import axios from "axios";
import { GET_PAKET } from "./types";

const api = "https://admin.proo.co.id";
//const api = "http://localhost:5000";

export const getPaket = () => (dispatch) => {
  axios
    .get(`${api}/api/menuProo`)
    .then((res) => {
      console.log("Success Paket :", res.data);
      dispatch({
        type: GET_PAKET,
        payload: res.data,
      });
    })
    .catch((err) => console.log("Error Paket :", err));
};
