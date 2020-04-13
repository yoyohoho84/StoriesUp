import React, { Component, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import VkButton from "../componnets/UI/Button";
import * as actions from "../store/actions";
import ChosenGroup from "../componnets/organisms/ChosenGroup";
import { connect } from "react-redux";
import StoriesSlider from "../componnets/organisms/StoriesSlider";
import Layout from "../hocs/Layout/layout";
import { Avatar } from "@vkontakte/vkui";

class Home extends Component {
  state = {};

  AddToCommunity = () => {
    this.props.onFetchGroups();
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

        {/* {groupList} */}

        {/*  {this.props.groupName && this.props.groupImg && (
          <ChosenGroup
            groupName={this.props.groupName}
            groupImg={this.props.groupImg}
          />
        )} */}

        <VkButton
          size="l"
          level="2"
          onClick={this.props.go}
          data-to="persik"
          name="Сейчас v"
        />
        <StoriesSlider />
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
    groupName: state.fth.groupName,
    groupImg: state.fth.groupImg,
    groupData: state.fth.groupData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchGroups: () => dispatch(actions.fetchGroups()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
