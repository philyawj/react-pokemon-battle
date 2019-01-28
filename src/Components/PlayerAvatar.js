import React, { PureComponent } from "react";

export default class EnemyAvatar extends PureComponent {
  render() {
    let faint = this.props.playerFaint;
    let anim;
    if (faint === true) {
      anim = "animated fadeOut slow";
    }
    if (faint === false) {
      anim = "animated 	fadeInUp";
    }
    if (faint === "") {
      anim = "hide";
    }
    return (
      <div className={anim}>
        <img className="avatar mx-2" src="/img/hero.png" alt="" />
      </div>
    );
  }
}
