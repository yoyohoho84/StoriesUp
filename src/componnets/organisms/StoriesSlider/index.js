import React, { Component } from "react";
import { HorizontalScroll, Div, FormLayout, File } from "@vkontakte/vkui";

import StorieCard from "../StorieCard";
import "./StoriesSlider.scss";

class StoriesSlider extends Component {
  state = {
    file: null,
    imagePreviewUrl: null,
    fileData: [],
  };

  getFile = (e) => {
    e.preventDefault();
    console.log("HEY FROM GET FILE === >", e.target.files[0]);
    /* this.setState({
      file: URL.createObjectURL(e.target.files[0])
    }) */

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState((prevState) => ({
        file: file,
        imagePreviewUrl: reader.result,
        fileData: prevState.fileData .concat(reader.result),
      }));
      /* this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      }); */
    };

    reader.readAsDataURL(file);
  };

  render() {
   
    const storiesItem = this.state.fileData.map((photo, id) => {
      return (
        <StorieCard
          handleChange={this.getFile}
          handleClick={this.props.openStoriesEditor}
          file={photo}
        />
      );
    });
    return (
      <>
        <HorizontalScroll>
          <Div className="slider-wrapper">
            {storiesItem}
            <Div className="storie-card__choose">
              <File
                style={{
                  width: '100%',
                  height: '100%',
                  margin: 0,
                  padding: 0,
                  cursor: 'pointer'
                }}
                accept=".jpg, .jpeg, .png, .gif"
                mode="overlay_secondary"
                onChange={this.getFile}
              >
              </File>
            </Div>
          </Div>
        </HorizontalScroll>
      </>
    );
  }
}

export default StoriesSlider;
