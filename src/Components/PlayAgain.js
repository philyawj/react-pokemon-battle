import React, { Component } from "react";

export class PlayAgain extends Component {
  render() {
    return (
      <div className="battle-text-content">
        <p id="play-again-text" onClick={() => this.props.handlePlayAgain()}>
          Click Here To Play Again
        </p>
      </div>
    );
  }
}

export default PlayAgain;
