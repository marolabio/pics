import React, { Component } from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
export default class ImageList extends Component {
  render() {
    const images = this.props.images.map(img => (
      <ImageCard key={img.id} image={img} />
    ));

    return <div className="image-list">{images}</div>;
  }
}
