import React, { Component } from "react";
import "./square.css";

const Restart = props => {
  return (
    <button
      className="f6 pv1 ph2 ttu pointer b bg-brown"
      onClick={props.onRestart}
    >
      Restart
    </button>
  );
};

export default Restart;
