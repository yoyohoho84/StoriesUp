import * as actionTypes from "./actionTypes";
import axios from '../../axios-routes';

const SOME_URL = '';


export const fetchGroupsSuccess = (token, userId, groupsList) => {
  return {
    type: actionTypes.FETCH_GROUPS_SUCCESS,
    idToken: token,
    userId: userId,
    groupsList: groupsList
  };
};

export const fetchGroupsFail = (error) => {
  return {
    type: actionTypes.FETCH_GROUPS_FAIL,
    error: error,
  };
};


export const fetchGroups = (someData) => {
  console.log('FETCH STARTED')
  return dispatch => {
    /* dispatch(authStart()); */
    const data = {
      someData
    };
    let url = SOME_URL; // url к которому отправляем запрос
    
    axios.post(url, data)
      .then(resp => {
        console.log(resp)
        dispatch(fetchGroupSuccess(resp.data.idToken, resp.data.localId, resp.data.groupList))
      })
      .catch(err => {
        console.log(err)
        console.log('IS SIGN UP IN ACTION', isSignUp)
        dispatch(fetchGroupFail(err))
      })
  };
};

