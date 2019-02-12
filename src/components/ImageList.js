import React, { Component } from "react";

export default class ImageList extends Component {
  render() {
    const images = this.props.images.map(img => (
      <img key={images.id} src={img.urls.regular} alt={img.description} />
    ));

    return <div>{images}</div>;
  }
}
