import React, { useState } from 'react';
import ScriptSlection from './ScriptSlection';
import ChartBlock from './ChartBlock';
import Table from './Table';
import YaMap from './YaMap';

export default function MainBox() {
  const [scriptIndex, setScriptIndex] = useState(0);
  return (
    <div className="main-box">
      <ScriptSlection setScriptIndex={setScriptIndex} />
      <div className="flex-box">
        <div className="left-box">
          <div>
            <ChartBlock scriptIndex={scriptIndex} />
          </div>
          <Table scriptIndex={scriptIndex} />
        </div>
        <YaMap scriptIndex={scriptIndex} />
      </div>
    </div>
  );
}
