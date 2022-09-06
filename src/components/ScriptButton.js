import React from 'react';
import { GiLightningArc } from 'react-icons/gi';
import { GiCoalWagon } from 'react-icons/gi';
import { GiFuelTank } from 'react-icons/gi';
import { TiCancel } from 'react-icons/ti';
//GiBarrelLeak
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const SCRIPT_MAP = {
  noSelect: 0,
  electra: 1,
  coal: 2,
};

function Button(props) {
  const getScriptIcon = (scriptCase) => {
    switch (scriptCase) {
      case 'electra':
        return <GiLightningArc />;
      case 'coal':
        return <GiCoalWagon />;
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
