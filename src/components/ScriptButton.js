import React from "react";
import { GiLightningArc } from "react-icons/gi";
import { GiFuelTank } from "react-icons/gi";
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
        return <GiFuelTank />;
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
