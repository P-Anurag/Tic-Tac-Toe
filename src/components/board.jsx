import React, { Component } from "react";
import Square from "./square";
class Board extends Component {
  constructor(props) {
    super(props);
    this.Board = props.board;
  }
  render() {
    return (
      <div>
        {this.Board[0].map(s => (
          <Square
            key={s.id}
            group={0}
            square={s}
            onChange={this.props.onChange}
          />
        ))}
        <br />
        {this.Board[1].map(s => (
          <Square
            key={s.id}
            group={1}
            square={s}
            onChange={this.props.onChange}
          />
        ))}
        <br />
        {this.Board[2].map(s => (
          <Square
            key={s.id}
            group={2}
            square={s}
            onChange={this.props.onChange}
          />
        ))}
      </div>
    );
  }
}

export default Board;
