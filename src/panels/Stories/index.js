import React, { Component, useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { Div, InfoRow } from "@vkontakte/vkui";

import * as actions from "../../store/actions";
import ChosenGroup from "../../componnets/organisms/ChosenGroup";
import { connect } from "react-redux";
import Layout from "../../hocs/Layout/layout";
import "./Stories.scss";
import PreviewStoriesCard from "../../componnets/organisms/PreviewStoriesCard";
import VkButton from "../../componnets/UI/Button";

class Stories extends Component {
  state = {};

  render() {
    return (
      <Layout panelTitle="Отложенные" id={this.props.id}>
        <InfoRow>Истории группы</InfoRow>

        <PreviewStoriesCard />

        <VkButton
          mode="commerce"
          size="m"
          handleClick={this.props.go}
          name="Отложенные"
          data-to='home'
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Stories);
