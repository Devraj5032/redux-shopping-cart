import {createStore , combineReducers } from "redux";
import { categoryReducer } from "./reducers/category-reducers";
import { cartReducer } from "./reducers/cart-reducer";

const rootReducer = combineReducers({categoryReducer , cartReducer})

const store = createStore(rootReducer)

export default store;