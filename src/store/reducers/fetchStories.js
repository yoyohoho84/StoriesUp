import * as actionsTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/updateHelper";

const initialState = {
  error: null,
  errorAuth: null,
  errorLogin: null,
  loading: false,
  delayStoriesList: null
};



const fetchDelayStoriesSuccess = (state, action) => {
  console.log("HEY FROM STORIES SUCCESS ===>", action);
  return updateObject(state, {
    delayStoriesList: action.storiesData,
    error: null,
    loading: false,
  });
};


const fetchGroupFail = (state, action) => {
  return updateObject(state, {
    error: action.error.response.data.error,
    loading: false,
  });
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_DELAY_STORIES_SUCCESS: return fetchDelayStoriesSuccess(state, action);
 /*    case actionsTypes.FETCH_AUTH_TOKEN_SUCCESS: return fetchAuthTokenSuccess(state, action);
    case actionsTypes.FETCH_USER_GROUPS_SUCCESS: return fetchUserGroupsSuccess(state, action);
    case actionsTypes.GET_CURRENT_GROUP: return getCurrentGroup(state, action); */
    default:
      return state;
  }
};

export default reducer;
