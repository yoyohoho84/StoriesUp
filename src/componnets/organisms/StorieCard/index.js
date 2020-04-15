import React from "react";
import { Div, File, FormLayout } from "@vkontakte/vkui";

const StoryCard = (props) => {
  return (
    <>
      <Div
        onClick={props.handleClick}
        style={{
          marginLeft: 0,
          marginTop: 5,
          marginBottom: 5,
          marginRight: 5,
          width: 80,
          height: 140,
          backgroundColor: "gray",
          borderRadius: 7,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <FormLayout>
          <File
            style={{ margin: 0, padding: 0, backgroundColor: "inherit" }}
            accept=".jpg, .jpeg, .png, .gif"
            mode="overlay_secondary"
          >
            Добавить историю
          </File>
        </FormLayout>
      </Div>
    </>
  );
};

export default StoryCard;
