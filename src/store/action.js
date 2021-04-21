import store from "./store";
import { getObj, setObj } from "../utils/storage";

export const FETCH_LIST = "FETCH_LIST";
export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const SEARCH_FRIEND = "SEARCH_FRIEND";
export const SORT = "SORT";

export const ORDER = {
    FAV: "FAV",
    N_FAV: "N_FAV",
};

const FRIENDS_LIST = "FRIENDS_LIST";

export const fetchList = () => {
    const list = getObj(FRIENDS_LIST) || [];
    store.dispatch({ type: FETCH_LIST, data: list });
};

export const addFriend = (friend) => {
    const list = getObj(FRIENDS_LIST) || [];
    list.push({ name: friend, fav: false, id: list.length + 1 });
    setObj(FRIENDS_LIST, list);
    store.dispatch({ type: ADD_FRIEND, data: list });
};

export const addToFavourite = (friend) => {
    const list = getObj(FRIENDS_LIST) || [];
    const friendToFav = list.find((f) => f.id === friend.id);
    friendToFav.fav = !friendToFav.fav;
    setObj(FRIENDS_LIST, list);
    store.dispatch({ type: ADD_TO_FAVOURITE, data: list });
};

export const deleteFriend = (friend) => {
    const list = getObj(FRIENDS_LIST) || [];
    const listWithoutFriend = list.filter((f) => f.id !== friend.id);
    setObj(FRIENDS_LIST, listWithoutFriend);
    store.dispatch({ type: DELETE_FRIEND, data: listWithoutFriend });
};

export const reOrder = () => {
    const list = getObj(FRIENDS_LIST) || [];
    const sortedByFav = list.sort((x, y) => (x === y ? 0 : x ? -1 : 1));
    console.log({ sortedByFav });
    setObj(FRIENDS_LIST, sortedByFav);
    store.dispatch({ type: SORT, data: sortedByFav });
};

export const searchFriend = (friend) => {
    // const searchedFriend = get(friend.id);
    // store.dispatch({ type: SEARCH_FRIEND, data: searchedFriend });
}
