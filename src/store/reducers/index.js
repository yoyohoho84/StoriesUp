import { combineReducers } from "redux";
import  fetchGroups  from "./fetchGroups";
import  fetchStories  from "./fetchStories";

const storiesApp = combineReducers({
    fth: fetchGroups,
    fst: fetchStories,
});

export default storiesApp;