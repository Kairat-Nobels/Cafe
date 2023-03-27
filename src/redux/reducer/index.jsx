import { combineReducers } from "redux";
import aboutReducer from "./aboutReducer";
import cassa from "./cassa";

export const rootReducer = combineReducers({
    basket: cassa,
    getAbout: aboutReducer
})