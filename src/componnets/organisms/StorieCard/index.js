import React from "react";
import { Div, File } from "@vkontakte/vkui";

const StoryCard = (props) => {
  return (
    <>
      <Div
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
        <File
          style={{ margin: 0, padding: 0, backgroundColor: "inherit" }}
          accept=".jpg, .jpeg, .png, .gif"
        >
          Добавить историю
        </File>
      </Div>
    </>
  );
};

export default StoryCard;
