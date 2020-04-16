import React, { Component, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import bridge from "@vkontakte/vk-bridge";
import { Div, Link } from "@vkontakte/vkui";

import VkButton from "../../componnets/UI/Button";
import * as actions from "../../store/actions";
import ChosenGroup from "../../componnets/organisms/ChosenGroup";
import { connect } from "react-redux";
import StoriesSlider from "../../componnets/organisms/StoriesSlider";
import Layout from "../../hocs/Layout/layout";
import "./Home.scss";

class Home extends Component {
  state = {};

  AddToCommunity = () => {
    this.props.onFetchGroups();
  };

  openStoriesEditor = () => {
    console.log("HEY I TRY TO OPEN STIRIES EDITOR !!!");
    bridge.send("VKWebAppShowStoryBox", {
      background_type: "image",
      url:
        "https://sun9-65.userapi.com/c850136/v850136098/1b77eb/0YK6suXkY24.jpg",
    });
  };

  render() {
    return (
      <Layout panelTitle="StoriesUp" id={this.props.id}>
        <VkButton
          mode="commerce"
          size="xl"
          stretched
          handleClick={this.AddToCommunity}
          name="Выбрать группу"
        />

        <h2>Добавление истории для группы:</h2>

        {this.props.currentGroupData && (
          <ChosenGroup
            groupName={this.props.currentGroupData[0].name}
            groupImg={this.props.currentGroupData[0].photo_200}
          />
        )}

        <VkButton
          size="l"
          level="2"
          onClick={this.props.go}
          data-to="persik"
          name="Сейчас v"
        />

        <StoriesSlider openStoriesEditor={this.openStoriesEditor} />

        <Div className="btn-container">
          <VkButton
            mode="commerce"
            size="m"
            /*  handleClick={this.AddToCommunity} */
            name="В очередь 1 историю"
          />

          <VkButton
            mode="commerce"
            size="m"
            handleClick={this.props.go}
            name="Отложенные"
            data-to='stories'
          />

        </Div>
      </Layout>
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

const mapStateToProps = (state) => {
  return {
    currentGroupData: state.fth.currentGroupData,
    groupData: state.fth.groupData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchGroups: () => dispatch(actions.fetchGroups()),
    onGetPhoto: () => dispatch(actions.getPhoto()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
