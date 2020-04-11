import React, { Component, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import bridge from "@vkontakte/vk-bridge";

import VkButton from "../componnets/UI/Button";
import StorieCard from "../componnets/organisms/StorieCard";

import {
  Panel,
  PanelHeader,
  Div,
  Avatar,
  InfoRow,
  HorizontalScroll,
  File,
} from "@vkontakte/vkui";
import GroupCard from "../componnets/organisms/GroupCard";
import { connect } from "react-redux";

class Home extends Component {
  state = {};

  AddToCommunity = () => {
    console.log("something happen");
  };

  render() {
    const storiesItem = [1, 2, 3, 4, 5, 6, 7, 8].map((item, id) => {
      return <StorieCard key={id} />;
    });
    return (
      <Panel id={this.props.id}>
        <PanelHeader>StoriesUp</PanelHeader>

        <Div style={{ margin: 10 }}>
          <VkButton
            mode="commerce"
            size="xl"
            stretched
            onClick={this.AddToCommunity}
            name="Выбрать группу"
          />

          <h2>Добавление истории для группы:</h2>

          {/* {fetchedGroup && <GroupCard fetchedGroup={fetchedGroup} />} */}

          <VkButton
            size="l"
            level="2"
            onClick={this.props.go}
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
  }
}

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

export default connect(null, null)(Home);
