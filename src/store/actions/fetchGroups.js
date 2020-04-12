import * as actionTypes from "./actionTypes";
import bridge from "@vkontakte/vk-bridge";


const SOME_URL = "";

export const fetchGroupsSuccess = (token, userId, groupsList) => {
  return {
    type: actionTypes.FETCH_GROUPS_SUCCESS,
    idToken: token,
    userId: userId,
    groupsList: groupsList,
  };
};

export const fetchGroupsFail = (error) => {
  return {
    type: actionTypes.FETCH_GROUPS_FAIL,
    error: error,
  };
};

export const fetchGroups = (someData) => {
  console.log("FETCH STARTED");
  return (dispatch) => {
    /* dispatch(authStart()); */
    
    /* bridge
      .sendPromise("VKWebAppAddToCommunity", {})
      .then((res) => {
        let idGroup = 0;
        idGroup = +res.group_id;
        console.log("HEY FROM FETCH GROUP ===>", idGroup);
        bridge.sendPromise("VKWebAppGetCommunityToken", {
          app_id: 7403042,
          group_id: idGroup,
          scope: "stories",
        });
        console.log(res);
        dispatch(fetchGroupsSuccess());
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchGroupsFail(err));
      }); */

      AddToCommunity();
  };
};


async function AddToCommunity() {
  try {
    const responseAdd = await bridge.sendPromise("VKWebAppAddToCommunity", {});
    const IdGroup = await responseAdd.group_id;
    const groupRes = await getGroupToken(IdGroup);
    const groupToken = await groupRes.access_token;
    const group = await getGroupData(IdGroup, groupToken);

    console.log("HEY FROM GET GROUP ==== >", group.response[0]);
  } catch (error) {
    console.log('ERROR FROM ASYNC FUNC ===>', error);
  }
}






















const getGroupToken = async (id) => {
  try {
    const res = await bridge.sendPromise("VKWebAppGetCommunityToken", {
    app_id: 7403042,
    group_id: +id,
    scope: "stories",
  });
  return res
  } catch (error) {
    console.log(error)
  }
};

const getGroupData = async (id, token) => {
  try {
    const res = bridge.send("VKWebAppCallAPIMethod", {
      method: "groups.getById",
      request_id: "storiesup_test1",
      params: {
        v: "5.103",
        access_token: token,
        group_id: id,
      },
    });
    return res;
  } catch (error) {
    console.log(error)
  }
};

/* function AddToCommunity() {
  bridge
    .sendPromise("VKWebAppAddToCommunity", {})
    .then((res) => {
      idGroup = +res.group_id;
      console.log("res AddToCommunity", idGroup);
      bridge
        .sendPromise("VKWebAppGetCommunityToken", {
          app_id: 7403042,
          group_id: idGroup,
          scope: "stories",
        })
        .then((res) => {
          tokenGroup = res.access_token;
          console.log("res tokenGroup", tokenGroup);

          async function fetchGroup() {
            try {
              const group = await bridge.send("VKWebAppCallAPIMethod", {
                method: "groups.getById",
                request_id: "storiesup_test1",
                params: {
                  v: "5.103",
                  access_token: tokenGroup,
                  group_id: idGroup,
                },
              });
              setGroup(group.response[0]);
              console.log("res group", group.response[0]);
              console.log("res fetchedGroup", fetchedGroup);
            } catch (error) {
              console.log(error);
            }
          }
          fetchGroup();
        })
        .catch((err) => {
          console.log("err tokenGroup", err);
        });
    })
    .catch((err) => {
      console.log("err AddToCommunity", err);
    });
}
 */