import React from "react";
import { Div, File, FormLayout } from "@vkontakte/vkui";

import "./StorieCard.scss";
import Tooltip from '../../UI/Tooltip';

const StoryCard = (props) => {
  let fileUrl = null;
  if (props.file) {
    fileUrl = props.file;
  }

  return (
    <>
      <Div id={props.id} className="storie-card" style={{ backgroundImage: 'url(' + fileUrl + ')' }}>
        <FormLayout>
          <Tooltip storieId={props.id} handleClick={props.onDeleteStorie} variant='Delete-storie' />
        </FormLayout>
      </Div>
    </>
  );
};

export default StoryCard;
