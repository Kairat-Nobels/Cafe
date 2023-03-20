import { combineReducers } from "redux";
import cassa from "./cassa";

export const rootReducer = combineReducers({
    basket: cassa
})