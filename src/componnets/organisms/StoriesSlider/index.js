import React, { Component } from "react";
import { HorizontalScroll, Div, FormLayout, File } from "@vkontakte/vkui";
import { v4 as uuidv4 } from "uuid";

import StorieCard from "../StorieCard";
import "./StoriesSlider.scss";

class StoriesSlider extends Component {
  state = {
    file: null,
    imagePreviewUrl: null,
    fileData: [],
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("HEY FROM UPDATE IN STORIE===> ", prevState.fileData);
    console.log("HEY FROM UPDATE IN STORIE===> ", this.state.fileData);
    if (this.state.fileData !== prevState.fileData) {
      this.props.getStoriesData(this.state.fileData);
    }
  }

  getFile = (e) => {
    e.preventDefault();
    console.log("HEY FROM GET FILE === >", e.target.files[0]);
    let reader = new FileReader();
    let file = e.target.files[0];
    let fileObj = {};
    if (file) {
      reader.onloadend = () => {
        let uniqueId = uuidv4();
        let url = reader.result;
        fileObj = { id: uniqueId, photoUrl: url };
        this.setState((prevState) => ({
          file: file,
          imagePreviewUrl: reader.result,
          fileData: prevState.fileData.concat(fileObj),
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  onDeleteStorie = (storieId) => {
    console.log("HEY FROM DELETE ===>", storieId);
    this.setState((prevState) => ({
      fileData: prevState.fileData.filter((item) => item.id !== storieId),
    }));
  };

  render() {
    const storiesItem = this.state.fileData.map((obj) => {
      return (
        <StorieCard
          key={obj.id}
          id={obj.id}
          handleChange={this.getFile}
          handleClick={this.props.openStoriesEditor}
          file={obj.photoUrl}
          onDeleteStorie={this.onDeleteStorie}
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
                  width: "100%",
                  height: "100%",
                  margin: 0,
                  padding: 0,
                  cursor: "pointer",
                }}
                accept=".jpg, .jpeg, .png, .gif"
                mode="overlay_secondary"
                onChange={this.getFile}
              ></File>
            </Div>
          </Div>
        </HorizontalScroll>
      </>
    );
  }
}

export default StoriesSlider;
