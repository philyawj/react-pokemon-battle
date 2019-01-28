import React, { Component } from "react";
import PlayerAvatar from "./PlayerAvatar";

export class PlayerBox extends Component {
  render() {
    // calc player progress bar percentage based on HP
    let percentage = (this.props.playerHP / this.props.playerMaxHP) * 100 + "%";
    let num = (this.props.playerHP / this.props.playerMaxHP) * 100;
    let progressColor;

    // use player progress bar calc to style colors
    if (num <= 25) {
      progressColor = "progress-bar bg-danger";
    } else if (num <= 50) {
      progressColor = "progress-bar bg-warning";
    } else if (num > 50) {
      progressColor = "progress-bar bg-success";
    }
    return (
      <div>
        {/* HERO POKEMON CONTAINER */}
        <div id="hero-container">
          {/* HERO POKEMON AVATAR PICTURE */}
          <div className="avatar-box ml-sm-5">
            <PlayerAvatar playerFaint={this.props.playerFaint} />

            <div className="oval" />
          </div>
          {/* END HERO POKEMON AVATAR PICTURE */}

          {/* HERO POKEMON INFO BOX */}
          <div id="hero-info-box">
            <div className="d-flex justify-content-between align-items-center">
              <h2 id="hero-name">{this.props.playerName}</h2>
              <h5 className="mr-1 d-none d-sm-block">
                Lv
                {this.props.playerLevel}
              </h5>
            </div>
            <div className="d-flex justify-content-between align-items-center ml-3 mr-1">
              <h5>HP</h5>
              <div className="progress ml-1 both-progress">
                <div
                  className={progressColor}
                  role="progressbar"
                  style={{ width: percentage }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </div>
            <div id="hero-hp" className="d-flex">
              <div className="ml-auto mr-3">
                <h5>
                  {this.props.playerHP}/{this.props.playerMaxHP}
                </h5>
              </div>
            </div>
          </div>
          {/* END HERO POKEMON INFO BOX */}
        </div>
        {/* END HERO POKEMON CONTAINER */}
      </div>
    );
  }
}

export default PlayerBox;
