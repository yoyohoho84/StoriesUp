import React from "react";
import { Div, File, FormLayout } from "@vkontakte/vkui";

import "./StorieCard.scss";

const StoryCard = (props) => {
  let fileUrl = null;
  if (props.file) {
    fileUrl = props.file;
  }

  return (
    <>
      <Div className="storie-card" style={{ backgroundImage: 'url(' + fileUrl + ')' }}>
        <FormLayout>
         {/*  <File
            style={{
              margin: 0,
              padding: 0,
              backgroundColor: "inherit",
            }}
            accept=".jpg, .jpeg, .png, .gif"
            mode="overlay_secondary"
            onChange={props.handleChange}
          >
            Добавить историю
          </File> */}
        </FormLayout>
      </Div>
    </>
  );
};

export default StoryCard;
