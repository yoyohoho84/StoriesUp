import * as actionsTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/updateHelper";

const initialState = {
  error: null,
  errorAuth: null,
  errorLogin: null,
  loading: false,
  groupImg: null,
  userToken: null,
  groupName: "",
  groupData: null,
  currentGroupData: null
};

// достать список групп клиента
//

/* const fetchGroupStart = (state, action) => {
  return updateObject(state, { errorAuth: null, errorLogin: null, loading: true });
}; */


const getCurrentGroup = (state, action) => {
  console.log("CURRENT GROUP  ===>", state.currentGroupData);
  return updateObject(state, {
    currentGroupData: state.groupData.filter( group => group.id === action.groupId),
    error: null,
    loading: false,
  });
};

const fetchGroupsSuccess = (state, action) => {
  console.log("HEY FROM SUCCESS ===>", action);
  return updateObject(state, {
    groupImg: action.groupImg,
    groupName: action.groupName,
    error: null,
    loading: false,
  });
};

const fetchAuthTokenSuccess = (state, action) => {
  /* console.log("HEY FROM SUCCESS ===>", action); */
  return updateObject(state, {
    userToken: action.token,
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


const fetchUserGroupsSuccess = (state, action) => {
  console.log("HEY FROM GET GROUP SUCCESS ===>", action);
  return updateObject(state, {
    groupData: action.groupData,
    error: null,
    loading: false,
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* case actionsTypes.AUTH_START: return authStart(state, action); */
    /* case actionsTypes.FETCH_GROUPS_SUCCESS: return fetchGroupsSuccess(state, action); */
    case actionsTypes.FETCH_GROUPS_FAIL: return fetchGroupFail(state, action);
    case actionsTypes.FETCH_AUTH_TOKEN_SUCCESS: return fetchAuthTokenSuccess(state, action);
    case actionsTypes.FETCH_USER_GROUPS_SUCCESS: return fetchUserGroupsSuccess(state, action);
    case actionsTypes.GET_CURRENT_GROUP: return getCurrentGroup(state, action);
    default:
      return state;
  }
};

export default reducer;
