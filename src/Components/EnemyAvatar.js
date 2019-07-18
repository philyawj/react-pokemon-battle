import React, { PureComponent } from "react";

export default class EnemyAvatar extends PureComponent {
  render() {
    let faint = this.props.enemyFaint;
    let anim;
    if (faint === true) {
      anim = "animated fadeOut slow";
    }
    if (faint === false) {
      anim = "animated zoomIn slow";
    }
    if (faint === "") {
      anim = "hide";
    }
    return (
      <div className={anim}>
        <img className="avatar mr-3 mt-4" src="./img/enemy.png" alt="" />
      </div>
    );
  }
}
