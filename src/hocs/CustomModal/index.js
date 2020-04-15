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

import * as actions from "../../../store/actions";

class SelectModal extends Component {
  state = {
    modalId: '',
    isLoading: false,
  };


  componentDidMount() {
    this.setState({

    })
  }

  render() {
    return (
      <ModalRoot activeModal={this.state.modalId}>
        <ModalCard
          header="Выберите группу"
          onClose={this.props.closeModal}
          id="select"
        >
          <List>{groupList}</List>
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

const mapDispatchToProps = (dispatch) => {
  return {
    onGroupChoose: (groupId) => dispatch(actions.getCurrentGroup(groupId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectModal);
