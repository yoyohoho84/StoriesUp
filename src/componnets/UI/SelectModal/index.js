import React, { Component } from "react";

import {
  withModalRootContext,
  Spinner,
  Group,
  Cell,
  View,
  PanelHeader,
  List,
  Panel,
  Avatar,
  ModalRoot,
  ModalCard,
} from "@vkontakte/vkui";
import { connect } from "react-redux";

class SelectModal extends Component {
  state = {
    items: [],
    isLoading: false,
  };


  componentDidMount() {}

  render() {
    let groupList = null;
    if (this.props.groupData) {
      groupList = this.props.groupData.map((group, index) => {
        return (
          <Cell key={index} before={<Avatar size={40} src={group.photo_200} />} selectable>
            <span>{group.name}</span>
          </Cell>
        );
      });
    }
    return (
      <ModalRoot  activeModal={this.props.modalId}>
        <ModalCard
          onClose={this.props.closeModal}
          id="select"
        >
          {groupList}
        </ModalCard>
      </ModalRoot>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groupData: state.fth.groupData,
  };
};

export default connect(mapStateToProps, null)(SelectModal);
