import store from "./store";
import { getObj, setObj, set, get } from "../utils/storage";

export const FETCH_LIST = "FETCH_LIST";
export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const SEARCH_FRIEND = "SEARCH_FRIEND";
export const SORT = "SORT";
export const PAGINATE = "PAGINATE";

export const ORDER = {
    FAV: "FAV",
    N_FAV: "N_FAV",
};

export const FRIENDS_LIST = "FRIENDS_LIST";
export const LIST_ORDER = "LIST_ORDER";
export const PAGE = "PAGE";

const sort = (order, list) => {
    return list.sort((x, y) => {
        if (order === ORDER.N_FAV) {
            return x.fav > y.fav ? 1 : -1;
        }
        return y.fav > x.fav ? 1 : -1;
    });
};

const paginate = (page = 1, list = []) => {
    const hasNextPage = false;
    const hasPreviousPage = false;
    const pageSize = 4;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    // console.log({ page, start, end });

    if (list.length < pageSize) {
        return {
            hasPreviousPage,
            hasNextPage,
            paginatedList: list,
        };
    }

    const paginatedList = list.slice(start, end);
    return {
        hasPreviousPage: page > 1,
        hasNextPage: list.length > end,
        paginatedList,
    };
};

export const fetchList = (type = FETCH_LIST) => {
    let state = store.getState();
    const {
        friends: { page, order },
    } = state;
    const list = getObj(FRIENDS_LIST) || [];
    const sortedByFav = sort(order, list);
    const { hasNextPage, hasPreviousPage, paginatedList } = paginate(page, sortedByFav);
    store.dispatch({ type: FETCH_LIST, data: { list: sortedByFav, paginatedList, hasNextPage, hasPreviousPage, page: 1 } });
};

export const addFriend = (friend) => {
    const list = getObj(FRIENDS_LIST) || [];
    list.push({ name: friend, fav: false, id: list.length + 1 });
    setObj(FRIENDS_LIST, list);
    fetchList(ADD_FRIEND);
    // store.dispatch({ type: ADD_FRIEND, data: { list: list } });
};

export const addToFavourite = (friend) => {
    const list = getObj(FRIENDS_LIST) || [];
    const friendToFav = list.find((f) => f.id === friend.id);
    friendToFav.fav = !friendToFav.fav;
    setObj(FRIENDS_LIST, list);
    store.dispatch({ type: ADD_TO_FAVOURITE, data: { list: list } });
};

export const deleteFriend = (friend) => {
    const list = getObj(FRIENDS_LIST) || [];
    const listWithoutFriend = list.filter((f) => f.id !== friend.id);
    setObj(FRIENDS_LIST, listWithoutFriend);
    fetchList(FRIENDS_LIST);
    // store.dispatch({ type: DELETE_FRIEND, data: { list: listWithoutFriend } });
};

export const reOrder = () => {
    let state = store.getState();
    let order;
    if (state.friends.order === ORDER.FAV) {
        order = ORDER.N_FAV;
    } else {
        order = ORDER.FAV;
    }
    const list = getObj(FRIENDS_LIST) || [];
    const sortedByFav = sort(order, list);
    setObj(FRIENDS_LIST, sortedByFav);
    set(LIST_ORDER, order);
    store.dispatch({ type: SORT, data: { order, page: 1 } });
    fetchList();
};

export const changePage = (page) => {
    if (page <= 0) {
        return;
    }
    const list = getObj(FRIENDS_LIST) || [];
    const order = get(LIST_ORDER);
    const sortedByFav = sort(order, list);
    const { hasNextPage, hasPreviousPage, paginatedList } = paginate(page, sortedByFav);
    store.dispatch({ type: PAGINATE, data: { page, hasNextPage, hasPreviousPage, paginatedList } });
};

export const searchFriend = (friend) => {
    // const searchedFriend = get(friend.id);
    // store.dispatch({ type: SEARCH_FRIEND, data: searchedFriend });
};
