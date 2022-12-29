import './ChartsBlock.scss';

import BarChart from './BarChart';

import curAmountIrk from './BarChart/amount/curAmount/curAmountIrk.json';
import curAmountBur from './BarChart/amount/curAmount/curAmountBur.json';
import coalCasetIrk from './BarChart/amount/coal_script/irk_coal_script.json';
import coalCaseBur from './BarChart/amount/coal_script/bur_coal_script.json';
import electraCaseIrk from './BarChart/amount/electra_script/irk_electra_script.json';
import electraCaseBur from './BarChart/amount/electra_script/bur_electra_script.json';
import gasCaseIrk from './BarChart/amount/gas_script/irk_gas_script.json';
import gasCaseBur from './BarChart/amount/gas_script/bur_gas_script.json';
import renewCaseIrk from './BarChart/amount/renew_script/irk_renew_script.json';
import renewCaseBur from './BarChart/amount/renew_script/bur_renew_script.json';

interface IPropsChartsBlock {}

const ChartsBlock = ({}: IPropsChartsBlock) => {
  const amountIrk = [curAmountIrk, coalCasetIrk, electraCaseIrk, gasCaseIrk, renewCaseIrk];
  const amountBur = [curAmountBur, coalCaseBur, electraCaseBur, gasCaseBur, renewCaseBur];

  return (
    <div className="chartsBlock">
      <BarChart caseOut={amountIrk[1]} />
    </div>
  );
};
export default ChartsBlock;
