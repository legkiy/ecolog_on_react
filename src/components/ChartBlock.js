import React from 'react';
import BarChart from './charts/BarChart';
import DonutChart from './charts/DonutChart';
import curAmountIrk from './charts/data/amount/curAmount/curAmountIrk.json';
import curAmountBur from './charts/data/amount/curAmount/curAmountBur.json';
import script1Irk from './charts/data/amount/coal_script/irk_coal_script.json';
import script1Bur from './charts/data/amount/coal_script/bur_coal_script.json';
import script2Irk from './charts/data/amount/electra_script/irk_electra_script.json';
import script2Bur from './charts/data/amount/electra_script/bur_electra_script.json';

import powerIrk from './charts/data/power/curAmount/powerIrk.json';
import powerBur from './charts/data/power/curAmount/powerBur.json';

export default function ChartBlock({ scriptIndex }) {
  const amountIrk = [curAmountIrk, script1Irk, script2Irk];
  const amountBur = [curAmountBur, script1Bur, script2Bur];

  return (
    <div className="flex-box">
      <div>
        <div className="flex-box">
          <div className="chart-region-name">
            <h3>
              Иркутская
              <br /> область
            </h3>
          </div>
          <div>
            <div className="donut-box">
              <h3 className="banner">
                Установленная мощность,
                <br /> Гкал/ч
              </h3>
              <div className="donut">
                <DonutChart chartOut={powerIrk} />
              </div>
            </div>
          </div>
          <div>
            <h3 className="banner">Кол-во котельных</h3>
            <div className="bar-box">
              <div className="bar-1">
                <BarChart chartOut={amountIrk[scriptIndex]} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-box">
          <div className="chart-region-name">
            <h3>
              Республика
              <br />
              Бурятия
            </h3>
          </div>
          <div className="donut-box">
            <div className="donut">
              <DonutChart chartOut={powerBur} />
            </div>
          </div>
          <div className="bar-box">
            <div className="bar-2">
              <BarChart chartOut={amountBur[scriptIndex]} />
            </div>
          </div>
        </div>
      </div>
      <div className="centr-items">
        <ul className="bar-legend">
          <li className="ico-legend">черемховский уголь</li>
          <li className="ico-legend">прочий уголь</li>
          <li className="ico-legend">древесина</li>
          <li className="ico-legend">мазут</li>
          <li className="ico-legend">газ</li>
          <li className="ico-legend">эл/энергия</li>
        </ul>
      </div>
    </div>
  );
}
