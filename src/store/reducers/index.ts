import {combineReducers} from "redux";
import infoReducer from "./infoReducer";
import userListReducer from "./userListReducer";

const reducers = combineReducers({
    info: infoReducer,
    userList: userListReducer
});


export default reducers;
