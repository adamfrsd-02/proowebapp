import {
  GET_PAKET
} from "../actions/types";

const initialState = {
  data: [],
  //   new: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PAKET:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}