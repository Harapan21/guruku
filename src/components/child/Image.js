import React, { Component } from "react";
import Loading from "./loading";

export default class Images extends Component {
  constructor(props) {
    super(props);
    this.backgroundel = null;
    this.state = { isloaded: true };
  }
  componentDidMount() {
    const hdLoaderImg = new Image();
    hdLoaderImg.src = this.props.src;
    hdLoaderImg.onload = () => {
      this.setState({ isloaded: false });
    };
  }
  render() {
    const { src, className, animation, ...rest } = this.props;
    return this.state.isloaded ? (
      <Loading />
    ) : (
      <img
        src={src}
        {...rest}
        className={`${animation ? "animated zoomIn" : ""} ${className &&
          className}`}
      />
    );
  }
}
