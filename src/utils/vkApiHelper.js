import bridge from "@vkontakte/vk-bridge";

export const getGroupToken = async (id) => {
  try {
    const res = await bridge.sendPromise("VKWebAppGetCommunityToken", {
      app_id: 7403042,
      group_id: +id,
      scope: "stories",
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getGroupData = async (id, token) => {
  try {
    const res = await bridge.send("VKWebAppCallAPIMethod", {
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
    console.log(error);
  }
};

export const getAuthToken = async () => {
  try {
    const res = await bridge.send("VKWebAppGetAuthToken", {
      app_id: 7403042,
      scope: "groups",
    });
    console.log('HEY FROM HELPER FUNC  ====>', res)
    return res.access_token;
  } catch (error) {
    console.log(error);
  }
};

export const getUserGroupsList = async (token) => {
  try {
    const res = await bridge.send("VKWebAppCallAPIMethod", {
      method: "groups.get",
      request_id: "storiesup_test1",
      params: {
        v: "5.103",
        access_token: token,
        extended: true,
        filter: 'admin'
      },
    });
   /*  console.log('HEY FROM GET LIST OF GROUPS  ====>', res.response.items) */
    return res.response.items;
  } catch (error) {
    console.log(error);
  }
};
