import React from 'react';
import { GiLightningArc } from 'react-icons/gi';
import {
  GiCoalWagon,
  GiWoodPile,
  GiSolarPower,
  GiWindTurbine,
} from 'react-icons/gi';
// import { GiFuelTank } from 'react-icons/gi';
// import { TiCancel } from 'react-icons/ti';
//GiBarrelLeak
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// import recyclePower from '../img/recyclePower.png';

const SCRIPT_MAP = {
  noSelect: 0,
  coal: 1,
  electra: 2,
  wood: 3,
  solar: 4,
  wind: 5,
};

export default function Button({setScriptIndex,scriptCase,scriptDiscriptions}) {
  function getScriptIcon(scriptCase) {
    switch (scriptCase) {
      case 'coal':
        return <GiCoalWagon />;
      case 'electra':
        return <GiLightningArc />;
      case 'wood':
        return <GiWoodPile />;
      case 'solar':
        return <GiSolarPower />;
      case 'wind':
        return <GiWindTurbine />;
      case 'noSelect':
        return <p>Текущее состояние</p>;
      default:
    }
  }

  const handleOnClick = () => {
    setScriptIndex(SCRIPT_MAP[scriptCase]);
  };
  console.log('case: ' + getScriptIcon);
  return (
    <Tippy
      content={scriptDiscriptions}
      interactive={true}
      placement={'bottom'}
      appendTo={'parent'}
    >
      <button
        className="script-selection-button"
        type="button"
        onClick={() => handleOnClick()}
      >
        {getScriptIcon(scriptCase)}
      </button>
    </Tippy>
  );
}
