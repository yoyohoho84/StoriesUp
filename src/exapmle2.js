import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import bridge from "@vkontakte/vk-bridge";

import VkButton from "../componnets/UI/Button";
import StorieCard from "../componnets/organisms/StorieCard";

import {
  Panel,
  PanelHeader,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
  InfoRow,
  HorizontalScroll,
  File,
} from "@vkontakte/vkui";

const Home = ({ id, go, fetchedUser }) => {
  const [fetchedGroup, setGroup] = useState(null);
  const [cards, setCard] = useState(8);

  let idGroup = 0;
  let photoURL = null;
  let tokenGroup = 0;
  let tokenUser = 0;
  let urlUploadServer = "";

  function uploadFile() {
    axios.post(urlUploadServer, {
      search: document.location.search,
    });
  }

  function AddToCommunity() {
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
                console.log(error)
              }
            }
            fetchGroup();

            // bridge.sendPromise("VKWebAppCallAPIMethod", {
            // 	"method": "stories.getPhotoUploadServer",
            // 	"request_id": "storiesup_test2",
            // 	"params": {
            // 		"v": "5.103",
            // 		"access_token": tokenGroup,
            // 		"filter": "admin",
            // 		"add_to_news": "1",
            // 		"link_text": "go_to ",
            // 		"link_url": "https://vk.com/app_storiesup?w=wall-194109559_1"
            // 	}})
            // 	.then(res => {
            // 		console.log("res getPhotoUploadServer", res);
            // 		console.log("res getPhotoUploadServer URL", res.response.upload_url);
            // 		urlUploadServer = res.response.upload_url;

            // 	})
            // 	.catch(err => {
            // 		console.log("err getPhotoUploadServer", err);
            // 	});
          })
          .catch((err) => {
            console.log("err tokenGroup", err);
          });
      })
      .catch((err) => {
        console.log("err AddToCommunity", err);
      });
  }

  const storiesItem = [1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
    return <StorieCard />;
  });

  return (
    <Panel id={id}>
      <PanelHeader>StoriesUp</PanelHeader>

      <Div style={{ margin: 10 }}>
        <VkButton
          mode="commerce"
          size="xl"
          stretched
          onClick={AddToCommunity}
          name="Выбрать группу"
        />

        <InfoRow
          style={{
            marginLeft: 0,
            marginTop: 10,
            marginBottom: 10,
            marginRight: 0,
            padding: 0,
          }}
        >
          Добавление истории для группы:
        </InfoRow>

        {fetchedGroup && (
          <Cell
            className="groupItem"
            before={
              fetchedGroup.photo_200 ? (
                <Avatar src={fetchedGroup.photo_200} />
              ) : (
                <Avatar src={"https://vk.com/images/camera_200.png"} />
              )
            }
          >
            {fetchedGroup.name ? fetchedGroup.name : "Название группы"}
          </Cell>
        )}

        <VkButton
          size="l"
          level="2"
          onClick={go}
          data-to="persik"
          name="Сейчас v"
        />

        <HorizontalScroll>
          <Div
            style={{
              margin: 0,
              padding: 0,
              display: "flex",
              alignItems: "start",
              flexDirection: "row",
            }}
          >
            {storiesItem}
          </Div>
        </HorizontalScroll>
      </Div>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;
