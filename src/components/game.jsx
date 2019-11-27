import React, { Component } from "react";
import "tachyons";
import Board from "./board";
import Restart from "./restart";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      Board: [
        [
          { id: 1, value: null, visited: 0 },
          { id: 2, value: null, visited: 0 },
          { id: 3, value: null, visited: 0 }
        ],

        [
          { id: 4, value: null, visited: 0 },
          { id: 5, value: null, visited: 0 },
          { id: 6, value: null, visited: 0 }
        ],

        [
          { id: 7, value: null, visited: 0 },
          { id: 8, value: null, visited: 0 },
          { id: 9, value: null, visited: 0 }
        ]
      ],
      Xmovs: [],
      Omovs: [],
      isX: true
    };
  }

  result = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < win.length; i++) {
      let a = win[i][0];
      let b = win[i][1];
      let c = win[i][2];

      if (
        this.state.Xmovs.includes(a) &&
        this.state.Xmovs.includes(b) &&
        this.state.Xmovs.includes(c)
      ) {
        return "X";
      } else if (
        this.state.Omovs.includes(a) &&
        this.state.Omovs.includes(b) &&
        this.state.Omovs.includes(c)
      ) {
        return "O";
      }
    }
    return null;
  };

  handleClick = (s, group) => {
    if (s.visited === 1 || this.result()) return;
    const Board = [...this.state.Board];
    const g = group;
    let square = Board[g].indexOf(s);
    Board[g][square] = { ...s };
    Board[g][square].value = this.state.isX ? "X" : "O";

    let Xmovs = [...this.state.Xmovs];
    let Omovs = [...this.state.Omovs];
    if (this.state.isX) {
      Xmovs.push(s.id - 1);
    } else {
      Omovs.push(s.id - 1);
    }
    this.setState({ Board, Xmovs, Omovs });

    if (Board[g][square].value === "X") {
      let isX = false;
      this.setState({ isX });
    } else {
      let isX = true;
      this.setState({ isX });
    }
    Board[g][square].visited = 1;
  };

  handleRestart = () => {
    const Board = [...this.state.Board];
    let Xmovs = [...this.state.Xmovs];
    let Omovs = [...this.state.Omovs];
    for (let i = 0; i < Board.length; i++) {
      for (let j = 0; j < Board[i].length; j++) {
        Board[i][j].value = null;
        Board[i][j].visited = 0;
      }
    }
    Xmovs = [];
    Omovs = [];
    let isX = true;

    this.setState({ Board, Xmovs, Omovs, isX });
  };
  render() {
    let nextTurn = this.state.isX ? "X" : "O";
    return (
      <div className="tc">
        <h1 className="underline brown">TIC-TAC-TOE</h1>
        <Board board={this.state.Board} onChange={this.handleClick} />
        <h4 className="ttu">next turn : {nextTurn}</h4>
        <h5>The Winner is :{this.result()}</h5>
        <Restart onRestart={this.handleRestart} />
      </div>
    );
  }
}

export default Game;
