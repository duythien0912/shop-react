import { combineReducers } from "redux";
import user from "./reducers/user";
import items from "./reducers/items";

export default combineReducers({
  user,
  items
});
