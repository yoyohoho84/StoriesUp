import React, { useState, useEffect, Component } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";
import { connect } from "react-redux";

import Home from "./panels/Home";
import { ModalCard, ModalRoot, ConfigProvider } from "@vkontakte/vkui";
import SelectModal from "./componnets/UI/SelectModal";

class App extends Component {
  state = {
    activePanel: "home",
    activeModal: "",
    fetchedUser: null,
    shapeModal: null,
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
      activeModal: null
    })
  }

  go = (e) => {
    this.setState({
      activePanel: e.currentTarget.dataset.to,
    });
  };

  render() {
    let modal = null;
    if(this.props.dataGroups) {
       modal = (<SelectModal closeModal={this.closeModal} modalId={this.state.activeModal}/>);
    }

    return (
      <ConfigProvider isWebView={true}>
        <View activePanel={this.state.activePanel} modal={modal}>
          <Home setModal={this.setModal} id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
        </View>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataGroups: state.fth.groupData,
  };
};

export default connect(mapStateToProps, null)(App);
