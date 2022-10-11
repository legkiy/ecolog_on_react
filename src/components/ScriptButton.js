import React from 'react';
import { GiLightningArc } from 'react-icons/gi';
import { GiCoalWagon, GiWoodPile } from 'react-icons/gi';
// import { GiFuelTank } from 'react-icons/gi';
import { TiCancel } from 'react-icons/ti';
//GiBarrelLeak
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import recyclePower from '../img/recyclePower.png';

const SCRIPT_MAP = {
  noSelect: 0,
  electra: 1,
  coal: 2,
  wood: 3,
  recyclePower: 4,
};

export default function Button(props) {
  function getScriptIcon(scriptCase) {
    switch (scriptCase) {
      case 'electra':
        return <GiLightningArc />;
      case 'coal':
        return <GiCoalWagon />;
      case 'wood':
        return <GiWoodPile />;
      case 'recyclePower':
        return (
          <img src={recyclePower} className="img-recyclePower" alt=""></img>
        );
      case 'noSelect':
        return <p>Текущее состояние</p>;
      default:
    }
  }

  const handleOnClick = () => {
    props.setScriptIndex(SCRIPT_MAP[props.scriptCase]);
  };
  console.log('case: ' + getScriptIcon);
  return (
    <Tippy
      content={props.scriptDiscriptions}
      interactive={true}
      placement={'bottom'}
      appendTo={'parent'}
    >
      <button
        className="script-selection-button"
        type="button"
        onClick={() => handleOnClick()}
      >
        {getScriptIcon(props.scriptCase)}
      </button>
    </Tippy>
  );
}
