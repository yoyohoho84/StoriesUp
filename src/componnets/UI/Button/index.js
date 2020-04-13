import { Button } from "@vkontakte/vkui";
import React from "react";

const VkButton = (props) => {
  return (
    <>
      <Button
        mode={props.mode}
        size={props.size}
        stretched={props.stretched}
        onClick={props.handleClick}
        /* className={`${btn} ${props.variant}`} */ 
        // Danger Success Loading   'btn Success'
      >
        {props.name}
      </Button>
    </>
  );
};

export default VkButton;
