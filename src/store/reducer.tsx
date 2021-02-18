import { combineReducers } from "redux";
import { permissionTable } from "./demo/index";

export default combineReducers({
    Permission: permissionTable,
});
