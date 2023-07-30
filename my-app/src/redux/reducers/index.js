import { combineReducers } from "redux";
import { filtersSlice } from "./filters";

const rootReducer = combineReducers({
    filters: filtersSlice,
})

export default rootReducer