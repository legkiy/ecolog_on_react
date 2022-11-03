import React from 'react';
import {
  GiLightningArc,
  GiCoalWagon,
  GiWoodPile,
  GiSolarPower,
  GiWindTurbine,
  GiFuelTank,
} from 'react-icons/gi';
// FaTemperatureHigh
import { BsThermometerHalf } from 'react-icons/bs';

// import { GiFuelTank } from 'react-icons/gi';
// import { TiCancel } from 'react-icons/ti';
//GiBarrelLeak
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import recyclePower from '../img/recyclePower.png';

const SCRIPT_MAP = {
  noSelect: 0,
  coal: 1,
  electra: 2,
  gas: 3,
  renew: 4,
  wood: 5,
  solar: 6,
  wind: 7,
  termal: 8,
};

export default function Button({
  setScriptIndex,
  scriptCase,
  scriptDiscriptions,
}) {
  function getScriptIcon(scriptCase) {
    switch (scriptCase) {
      case 'coal':
        return <GiCoalWagon />;
      case 'electra':
        return <GiLightningArc />;
      case 'wood':
        return <GiWoodPile />;
      case 'gas':
        return <GiFuelTank />;
      case 'renew':
        return (
          <img src={recyclePower} alt={''} className="img-recyclePower"></img>
        );
      case 'solar':
        return <GiSolarPower />;
      case 'wind':
        return <GiWindTurbine />;
      case 'termal':
        return <BsThermometerHalf />;
      case 'noSelect':
        return <p>Текущее состояние</p>;
      default:
    }
  }

  const handleOnClick = () => {
    setScriptIndex(SCRIPT_MAP[scriptCase]);
  };
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
