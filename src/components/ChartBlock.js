import React from 'react';
import BarChart from './charts/BarChart';
import DonutChart from './charts/DonutChart';

import curAmountIrk from './charts/data/amount/curAmount/curAmountIrk.json';
import curAmountBur from './charts/data/amount/curAmount/curAmountBur.json';
import script1Irk from './charts/data/amount/script1/script1Irk.json';
import script1Bur from './charts/data/amount/script1/script1Bur.json';
import script2Irk from './charts/data/amount/script2/script2Irk.json';
import script2Bur from './charts/data/amount/script2/script2Bur.json';

import powerIrk from './charts/data/power/curAmount/powerIrk.json';
import powerBur from './charts/data/power/curAmount/powerBur.json';

export default function ChartBlock(props) {
  const amountIrk = [curAmountIrk, script1Irk, script2Irk];
  const amountBur = [curAmountBur, script1Bur, script2Bur];

  return (
    <div>
      <div className="bar-1">
        <BarChart chartOut={amountIrk[props.scriptIndex]} />
      </div>
      <div className="bar-2">
        <BarChart chartOut={amountBur[props.scriptIndex]} />
      </div>
      <div className="donut">
        <DonutChart chartOut={powerIrk} />
      </div>
      <div className="donut">
        <DonutChart chartOut={powerBur} />
      </div>
    </div>
  );
}
