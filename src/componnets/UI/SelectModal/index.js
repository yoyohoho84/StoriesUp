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
import VkButton from "../Button";

import './SelectModal.scss';


class SelectModal extends Component {
  state = {
  };


  render() {
  console.log('HEY FROM RENDER ====>', this.props.modalId)
  

    return (
      <ModalRoot activeModal={this.props.modalId}>
        <ModalCard
        className='modal-card'
          header="Выберите группу"
          onClose={this.props.closeModal}
          id={this.props.cardId}
        >
          <List>{this.props.modalContent}</List>
          <VkButton handleClick={this.props.handleClick} styles='modal-button' name='Добавить' />
        </ModalCard>
      </ModalRoot>
    );
  }
}

export default SelectModal;
