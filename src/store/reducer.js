import { FETCH_LIST, ADD_FRIEND, ADD_TO_FAVOURITE, DELETE_FRIEND, SEARCH_FRIEND, SORT, ORDER } from "./action";

const initialState = {
    list: [],
    order: ORDER.N_FAV,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LIST:
        case ADD_FRIEND:
        case ADD_TO_FAVOURITE:
        case DELETE_FRIEND:
        case SEARCH_FRIEND:
        case SORT:
            return {
                ...state,
                list: action.data,
            };
        default:
            return state;
    }
}
