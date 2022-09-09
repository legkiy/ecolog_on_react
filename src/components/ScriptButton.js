import React from 'react';
import { GiLightningArc } from 'react-icons/gi';
import { GiCoalWagon, GiWoodPile, GiRecycle } from 'react-icons/gi';
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
  recyclePower:4,
};

function Button(props) {
  const getScriptIcon = (scriptCase) => {
    switch (scriptCase) {
      case 'electra':
        return <GiLightningArc />;
      case 'coal':
        return <GiCoalWagon />;
      case 'wood':
        return <GiWoodPile />;
      case 'recyclePower':
        return <img src={recyclePower} className='img-recyclePower'></img>;
      case 'noSelect':
        return <TiCancel />;
      default:
    }
  };

  const handleOnClick = () => {
    props.setScriptIndex(SCRIPT_MAP[props.scriptCase]);
  };

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

export default Button;
