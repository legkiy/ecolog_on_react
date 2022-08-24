import React from "react";
import ScriptButton from "./ScriptButton";

function ScriptSlection(props) {
  return (
    <div className="script-selection-box">
      <h2 className="script-selection-title">Выбор сценария</h2>
      {/* <GiLightningArc className="script-selection-icon" /> */}
      <ScriptButton
        scriptCase={"electra"}
        setScriptIndex={props.setScriptIndex}
      />
      <ScriptButton scriptCase={"coal"} setScriptIndex={props.setScriptIndex} />
    </div>
  );
}

export default ScriptSlection;
