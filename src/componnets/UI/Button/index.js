import { Button } from "@vkontakte/vkui";
import React from "react";

const VkButton = (props) => {
  return (
    <>
      <Button
        className={props.styles}
        mode={props.mode}
        size={props.size}
        stretched={props.stretched}
        onClick={props.handleClick}
        align={props.align}
        disabled={props.isDisabled}
        id={props.id}
        data-to={props['data-to']}
        /* className={`${btn} ${props.variant}`} */
        // Danger Success Loading   'btn Success'
      >
        {props.name}
      </Button>
    </>
  );
};

export default VkButton;
