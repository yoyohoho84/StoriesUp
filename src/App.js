import React, { useState, useEffect, Component } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";
import { connect } from "react-redux";

import Home from "./panels/Home";
import Stories from "./panels/Stories";
import {
  ModalCard,
  ModalRoot,
  ConfigProvider,
  Cell,
  Avatar,
  Radio,
} from "@vkontakte/vkui";
import SelectModal from "./componnets/UI/SelectModal";
import * as actions from "./store/actions";

class App extends Component {
  state = {
    activePanel: "home",
    activeModal: "",
    fetchedUser: null,
    shapeModal: null,
    groupId: null,
  };

  componentDidUpdate(prevProps) {
    
    if (prevProps.dataGroups !== this.props.dataGroups) {
      this.setState({
        activeModal: "select",
      });
    }
  }

  async componentDidMount() {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    this.fetchData();
  }

  async fetchData() {
    const user = await bridge.send("VKWebAppGetUserInfo");
    this.setState({
      fetchedUser: user,
    });
    console.log(user);
  }

  closeModal = () => {
    this.setState({
      activeModal: null,
    });
  };

  go = (e) => {
    console.log("HEY FROM CLICK", e.currentTarget.dataset.to);
    this.setState({
      activePanel: e.currentTarget.dataset.to,
    });
  };

  getDataGroup = (groupId) => {
    console.log("HEY FROM CLICK ====>", groupId);
    this.setState({
      groupId: groupId,
    });
  };

  submitGroup = () => {
    this.props.onGroupChoose(this.state.groupId);
    this.closeModal();
    this.setState({
      groupId: null,
    });
  };

  render() {
    let modalContent = null;
    if (this.props.groupData) {
      modalContent = this.props.groupData.map((group, index) => {
        return (
          <Radio name="radio" value={group.name}>
            <Cell
              onClick={() => this.getDataGroup(group.id)}
              key={index}
              before={<Avatar size={40} src={group.photo_200} />}
            >
              <span>{group.name}</span>
            </Cell>
          </Radio>
        );
      });
    }

    let modal = null;
    if (this.props.dataGroups) {
      modal = (
        <SelectModal
          closeModal={this.closeModal}
          modalId={this.state.activeModal}
          cardId="select"
          modalContent={modalContent}
          handleClick={this.state.groupId ? this.submitGroup : null}
        />
      );
    }

    return (
      <ConfigProvider isWebView={true}>
        <View activePanel={this.state.activePanel} modal={modal}>
          <Home
            setModal={this.setModal}
            id="home"
            fetchedUser={this.state.fetchedUser}
            go={this.go}
          />
          <Stories id="stories" go={this.go} />
        </View>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataGroups: state.fth.groupData,
    groupData: state.fth.groupData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGroupChoose: (groupId) => dispatch(actions.getCurrentGroup(groupId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
