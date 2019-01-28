import React, { Component } from "react";

export class Attacks extends Component {
  render() {
    const { name, damage } = this.props.details;
    return (
      <div className="attack-container">
        <div>
          <span
            className="move-pointer"
            onClick={() => this.props.handleAttackClick(name, damage)}
          >
            {name}
          </span>
        </div>
      </div>
    );
  }
}

export default Attacks;
