import React, { Component } from "react";

export class GameOver extends Component {
  render() {
    return (
      <div className="battle-text-content d-flex justify-content-between">
        <p>
          {`${this.props.loser} fainted.`}
          <br /> {`${this.props.winner} wins!`}
        </p>
      </div>
    );
  }
}

export default GameOver;
