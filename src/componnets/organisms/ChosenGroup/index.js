import React from "react";
import { Cell, Avatar } from "@vkontakte/vkui";

const ChosenGroup = (props) => {
  return (
    <Cell
      className="groupItem"
      before={
        props.groupImg ? (
          <Avatar src={props.groupImg} />
        ) : (
          <Avatar src={"https://vk.com/images/camera_200.png"} />
        )
      }
    >
      {props.groupName ? props.groupName : "Название группы"}
    </Cell>
  );
};

export default ChosenGroup;
