import React, { Component } from "react";
import {
  Spinner,
  Group,
  Cell,
  Card,
  List,
  Avatar,
  ModalRoot,
  ModalCard,
  ModalPageHeader,
} from "@vkontakte/vkui";
import { connect } from "react-redux";

import "./SelectModal.scss";

class SelectModal extends Component {
  state = {
    items: [],
    isLoading: false,
  };

  componentDidMount() {}

  getDataGroup = (e) => {
    console.log('HEY FROM CLICK ====>', e)

    // вызываем action.setGroup(e) передаем это значение в reducer
    // вызываем action.setAnotherPage() делаем переход на другую страницу
    // на новой странице получаем id группы и вытаскиваем картинку и название группы
    // вызываем action.getCurrentGroupToken() для запроса токена что бы менять истории
  }

  render() {
    let groupList = null;
    if (this.props.groupData) {
      groupList = this.props.groupData.map((group, index) => {
        return (
          <Cell
            key={group.id}
            id={group.id}
            before={<Avatar size={40} src={group.photo_200} />}
            selectable
            onClick={() => this.getDataGroup(group.id)}
          >
            <span>{group.name}</span>
          </Cell>
        );
      });
    }
    return (
      <ModalRoot activeModal={this.props.modalId}>
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

export default connect(mapStateToProps, null)(SelectModal);
