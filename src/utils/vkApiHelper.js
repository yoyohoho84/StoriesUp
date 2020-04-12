import bridge from "@vkontakte/vk-bridge";

export const getGroupToken = async (id) => {
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
    console.log(error)
  }
};