import React, { Component } from "react";
import upsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export default class App extends Component {
  state = {
    images: []
  };

  handleSearchSubmit = async term => {
    const response = await upsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
