import React, { Component } from "react";
import "./square.css";

class Square extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onChange(this.props.square, this.props.group)}
        className="w3 h3 bg-brown"
      >
        {this.props.square.value + " "}
      </button>
    );
  }
}

export default Square;
