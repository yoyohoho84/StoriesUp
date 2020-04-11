import { combineReducers } from "redux";
import  fetchGroups  from "./fetchGroups";

const storiesApp = combineReducers({
    fth: fetchGroups,
});

export default storiesApp;