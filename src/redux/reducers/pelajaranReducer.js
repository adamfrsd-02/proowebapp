import {
    GET_PELAJARAN
} from '../actions/types';


const initialState = {
    data: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PELAJARAN:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}