import React, { Component } from "react";
import ScriptButton from "./ScriptButton";
import { GiLightningArc } from "react-icons/gi";

export default class ScriptSlection extends Component {
  render() {
    return (
      <div className="script-selection-box">
        <h2 className="script-selection-title">Выбор сценария</h2>
        <GiLightningArc className="script-selection-icon" />
        <ScriptButton text="сценарий 1"/>
      </div>
    );
  }

}
