import React from 'react';
import BarChart from './charts/BarChart';
import DonutChart from './charts/DonutChart';
import curAmountIrk from './charts/data/amount/curAmount/curAmountIrk.json';
import curAmountBur from './charts/data/amount/curAmount/curAmountBur.json';
import script1Irk from './charts/data/amount/coal_script/irk_coal_script.json';
import script1Bur from './charts/data/amount/coal_script/bur_coal_script.json';
import script2Irk from './charts/data/amount/electra_script/irk_electra_script.json';
import script2Bur from './charts/data/amount/electra_script/bur_electra_script.json';
import script3Irk from './charts/data/amount/gas_script/irk_gas_script.json';
import script3Bur from './charts/data/amount/gas_script/bur_gas_script.json';
import script4Irk from './charts/data/amount/renew_script/irk_renew_script.json';
import script4Bur from './charts/data/amount/renew_script/bur_renew_script.json';

import powerCurIrk from './charts/data/power/curAmount/powerIrk.json';
import powerCurBur from './charts/data/power/curAmount/powerBur.json';
import powerCoalIrk from './charts/data/power/coal_script/powerIrk.json';
import powerCoalBur from './charts/data/power/coal_script/powerBur.json';
import powerElectraIrk from './charts/data/power/electra_script/powerIrk.json';
import powerElectraBur from './charts/data/power/electra_script/powerBur.json';
import powerGasIrk from './charts/data/power/gas_script/powerIrk.json';
import powerGasBur from './charts/data/power/gas_script/powerBur.json';
import powerRenewIrk from './charts/data/power/renew_script/powerIrk.json';
import powerRenewBur from './charts/data/power/renew_script/powerBur.json';

export default function ChartBlock({ scriptIndex }) {
  const amountIrk = [curAmountIrk, script1Irk, script2Irk, script3Irk, script4Irk];
  const amountBur = [curAmountBur, script1Bur, script2Bur, script3Bur, script4Bur];
  const powerIrk = [powerCurIrk, powerCoalIrk, powerElectraIrk, powerGasIrk, powerRenewIrk];
  const powerBur = [powerCurBur, powerCoalBur, powerElectraBur, powerGasBur, powerRenewBur];

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
                <DonutChart chartOut={powerIrk[scriptIndex]} />
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
              <DonutChart chartOut={powerBur[scriptIndex]} />
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
          {scriptIndex === 4 && (
            <>
              <li className="ico-legend">ВИЭ</li>
              <li className="ico-legend">Тепловые насосы</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
