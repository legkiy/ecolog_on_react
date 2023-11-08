import React, { useState } from 'react';
import MainBox from './mainBoxFolder/MainBox';
import ScriptSlection from './ScriptSlection';

function Container() {
  const [scriptIndex, setScriptIndex] = useState(0);
  return (
    <div className="container box-80">
      <div className="discription">
        <h1 className="title">
          Environmental monitoring of thermal power facilities in the central
          ecological zone of the Baikal natural territory
        </h1>
        <p>
          The information and analytical system is designed to monitor changes
          in the environmental characteristics of the functioning of thermal
          power facilities in the Baikal natural territory during the
          implementation of various development scenarios. For these purposes, a
          database has been created that includes production indicators of power
          plants and municipal boiler houses that affect the natural environment
          of the coastal areas of the lake. Baikal, volumes of fuel burned and
          its quality characteristics. Estimates of the mass of emissions of
          pollutants, carbon dioxide into the atmosphere and the formation of
          ash and slag waste from power plants and boiler houses are given based
          on the developed mathematical model. Information from a database of
          indicators of renewable natural energy resources is presented.
        </p>
      </div>
      <ScriptSlection
        setScriptIndex={setScriptIndex}
        scriptIndex={scriptIndex}
      />
      <MainBox scriptIndex={scriptIndex} />
    </div>
  );
}
export default Container;
