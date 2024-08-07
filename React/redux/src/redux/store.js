import { combineReducers, createStore } from "redux";
import counterReducer from "./counter";

let combinReducer=combineReducers({counter:counterReducer})

export let store=createStore(combinReducer)
