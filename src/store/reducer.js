import { FETCH_LIST, ADD_FRIEND, ADD_TO_FAVOURITE, DELETE_FRIEND, SEARCH_FRIEND, SORT, ORDER, LIST_ORDER, PAGE, PAGINATE } from "./action";
import { get } from "../utils/storage";
const initialState = {
    list: [],
    paginatedList: [],
    page: get(PAGE) || 1,
    hasNextPage: false,
    hasPreviousPage: false,
    order: get(LIST_ORDER) || ORDER.N_FAV,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LIST:
        case ADD_FRIEND:
        case ADD_TO_FAVOURITE:
        case DELETE_FRIEND:
        case SEARCH_FRIEND:
        case PAGINATE:
        case SORT:
            return {
                ...state,
                ...action.data,
                list: action.data.list,
            };
        default:
            return state;
    }
}
