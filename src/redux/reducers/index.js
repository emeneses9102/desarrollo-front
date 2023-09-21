import userReducer from "./userReducer";
import { combineReducers } from "redux";
import transferReducer from "./transferReducer";

const rootReducer = combineReducers({
  users: userReducer,
  transfers: transferReducer,
});

export default rootReducer;
