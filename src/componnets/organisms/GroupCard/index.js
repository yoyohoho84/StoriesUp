import React from "react";

import { Cell, Avatar } from "@vkontakte/vkui";

const GroupCard = (props) => {
  return (
    <Cell
      className="groupItem"
      before={
        props.fetchedGroup.photo_200 ? (
          <Avatar src={props.fetchedGroup.photo_200} />
        ) : (
          <Avatar src={"https://vk.com/images/camera_200.png"} />
        )
      }
    >
      {props.fetchedGroup.name ? props.fetchedGroup.name : "Название группы"}
    </Cell>
  );
};

export default GroupCard;
