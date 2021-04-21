import { createStore, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "./reducer";

const store = createStore(
    combineReducers({
        friends: rootReducer,
    }),
    composeWithDevTools()
);

export default store;
