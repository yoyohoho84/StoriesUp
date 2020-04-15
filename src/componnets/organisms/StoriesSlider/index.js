import React from "react";
import { HorizontalScroll, Div, FormLayout, File } from "@vkontakte/vkui";

import StorieCard from "../StorieCard";
import './StoriesSlider.scss';

const StoriesSlider = (props) => {
  const storiesItem = [1, 2, 3, 4, 5, 6, 7, 8].map((item, id) => {
    return (<StorieCard handleClick={props.openStoriesEditor}/>);
  });
  return (
    <>
      <HorizontalScroll>
        <Div className="slider-wrapper">{storiesItem}</Div>
      </HorizontalScroll>
    </>
  );
};

export default StoriesSlider;
