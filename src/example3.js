async function AddToCommunity() {
  try {
    const responseAdd = await bridge.sendPromise("VKWebAppAddToCommunity", {});
    const IdGroup = await responseAdd.group_id;
    const groupRes = await getGroupToken(IdGroup);
    const groupToken = await groupRes.access_token;
    const group = getGroupData(IdGroup, groupToken);

    console.log("HEY FROM GET GROUP ==== >", group.response[0]);
  } catch (error) {
    console.log("ERROR FROM ASYNC FUNC ===>", error);
  }
}

const getGroupToken = (id) => {
  bridge.sendPromise("VKWebAppGetCommunityToken", {
    app_id: 7403042,
    group_id: +id,
    scope: "stories",
  });
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
