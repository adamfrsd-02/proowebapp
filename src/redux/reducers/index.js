import {
  combineReducers
} from "redux";
import paketReducer from "./paketReducer";
import pelajaranReducer from "./pelajaranReducer";


export default combineReducers({
  paket: paketReducer,
  pelajaran: pelajaranReducer
});