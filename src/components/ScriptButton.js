import React from "react";
import { GiLightningArc } from "react-icons/gi";
import { DiApple } from "react-icons/di";
// GiFuelTank GiBarrelLeak


const SCRIPT_MAP = {
  electra: 0,
  coal: 1,
  // noSelect:5,
};

function Button(props) {
  const getScriptIcon = (scriptCase) => {
    switch (scriptCase) {
      case "electra":
        return <GiLightningArc />;

      case "coal":
        return <DiApple />;
        default:
    }
  };

  const handleOnClick = () => {
    props.setScriptIndex(SCRIPT_MAP[props.scriptCase]);
  };

  return (
    <button
      className="script-selection-button"
      type="button"
      onClick={() => handleOnClick()}
    >
      {getScriptIcon(props.scriptCase)}
    </button>
    // adsasd
  );
}

export default Button;
