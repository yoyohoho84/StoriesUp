import bridge from "@vkontakte/vk-bridge";

import * as actionTypes from "./actionTypes";
import { getGroupData, getGroupToken } from "../../utils/vkApiHelper";


const SOME_URL = "";

export const fetchGroupsSuccess = (groupName, groupImg) => {
  return {
    type: actionTypes.FETCH_GROUPS_SUCCESS,
    groupName: groupName,
    groupImg: groupImg,
  };
};

export const fetchGroupsFail = (error) => {
  return {
    type: actionTypes.FETCH_GROUPS_FAIL,
    error: error,
  };
};

export const fetchGroups =  (someData) => {
  console.log("FETCH STARTED");
  return async (dispatch) => {
    /* dispatch(authStart()); */
     /*  AddToCommunity(); */

     try {
      const responseAdd = await bridge.sendPromise("VKWebAppAddToCommunity", {});
      const IdGroup = await responseAdd.group_id;
      const groupRes = await getGroupToken(IdGroup);
      const groupToken = await groupRes.access_token;
      const group = await getGroupData(IdGroup, groupToken);
      dispatch(fetchGroupsSuccess(group.response[0].name, group.response[0].photo_200));
      console.log("HEY FROM GET GROUP ==== >", group.response[0]);
    } catch (error) {
      dispatch(fetchGroupsFail(error));
      console.log('ERROR FROM ASYNC FUNC ===>', error);
    }
  };
};

