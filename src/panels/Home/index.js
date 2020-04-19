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
import DatePicker from "../../componnets/organisms/DatePicker";
import { formatDate } from "../../utils/formatDate";

class Home extends Component {
  state = {
    numOfStories: "вы еще ничего не добавили",
    dataStories: { stories: [], date: null },
  };

  AddToCommunity = () => {
    this.props.onFetchGroups();
  };

  componentDidUpdate() {
    console.log("HEY FROM HOME ===>", this.state);
  }

  fetchStories = () => {
    /*   if(this.state.dataStories.stories && this.state.dataStories.date) { */
    this.props.onFetchDelayStories(this.state.dataStories);
    this.setState((prevState) => ({
      ...prevState,
      dataStories: {
        ...prevState.dataStories,
        date: null,
        stories: [],
      },
    }));
    /*  } */
    console.log("IT S MISTAKE ===>");
  };

  fetchDate = (date) => {
    const newDate = formatDate(date);
    console.log("HEY FROM DATE  ====>", newDate);
    this.setState((prevState) => ({
      ...prevState,
      dataStories: {
        ...prevState.dataStories,
        date: newDate,
      },
    }));
  };

  getStoriesData = (data) => {
    let string = "вы еще ничего не добавили";
    if (data) {
      string = `${"В очередь"} ${data.length} ${"историй"}`;
    }
    this.setState((prevState) => ({
      ...prevState,
      numOfStories: string,
      dataStories: {
        ...prevState.dataStories,
        stories: data,
      },
    }));
  };

  render() {
    let btnInQue = null;
    if (this.state.dataStories.stories.length > 0) {
      btnInQue = (
        <VkButton
          mode="commerce"
          size="m"
          handleClick={this.fetchStories}
          name={this.state.numOfStories}
        />
      );
    }
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

        <DatePicker fetchDate={this.fetchDate} />

        <StoriesSlider getStoriesData={this.getStoriesData} />
        {btnInQue}

        <Div className="btn-container">
          <VkButton
            mode="commerce"
            size="m"
            handleClick={this.props.go}
            name="Отложенные"
            data-to="stories"
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
    delayStoriesList: state.fst.delayStoriesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchGroups: () => dispatch(actions.fetchGroups()),
    onFetchDelayStories: (storiesData) =>
      dispatch(actions.fetchDelayStories(storiesData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
