import './ChartsBlock.scss';

import BarChart from './BarChart';

import amountCurIrk from './BarChart/amount/curAmount/curAmountIrk.json';
import amountCurBur from './BarChart/amount/curAmount/curAmountBur.json';
import amountCoalIrk from './BarChart/amount/coal_script/irk_coal_script.json';
import amountCoalBur from './BarChart/amount/coal_script/bur_coal_script.json';
import amountElectraIrk from './BarChart/amount/electra_script/irk_electra_script.json';
import amountelectraBur from './BarChart/amount/electra_script/bur_electra_script.json';
import amountGasIrk from './BarChart/amount/gas_script/irk_gas_script.json';
import amountGasBur from './BarChart/amount/gas_script/bur_gas_script.json';
import amountRenewIrk from './BarChart/amount/renew_script/irk_renew_script.json';
import amountRenewBur from './BarChart/amount/renew_script/bur_renew_script.json';

import DonatChart from './DonatChart';
import powerCurIrk from './DonatChart/power/curAmount/powerIrk.json';
import powerCurBur from './DonatChart/power/curAmount/powerBur.json';
import powerCoalIrk from './DonatChart/power/coal_script/powerIrk.json';
import powerCoalBur from './DonatChart/power/coal_script/powerBur.json';
import powerElectraIrk from './DonatChart/power/electra_script/powerIrk.json';
import powerElectraBur from './DonatChart/power/electra_script/powerBur.json';
import powerGasIrk from './DonatChart/power/gas_script/powerIrk.json';
import powerGasBur from './DonatChart/power/gas_script/powerBur.json';
import powerRenewIrk from './DonatChart/power/renew_script/powerIrk.json';
import powerRenewBur from './DonatChart/power/renew_script/powerBur.json';

import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';

interface IPropsChartsBlock {}

const ChartsBlock = ({}: IPropsChartsBlock) => {
  const dispatch = useDispatch();
  const caseIndex = useSelector((state: RootState) => state.case.caseIndex);

  const amountIrk = [amountCurIrk, amountCoalIrk, amountElectraIrk, amountGasIrk, amountRenewIrk];
  const amountBur = [amountCurBur, amountCoalBur, amountelectraBur, amountGasBur, amountRenewBur];

  enum label {
    cherem = 'черем. уголь',
    coal = 'уголь',
    wood = 'древесина',
    oil = 'мазут',
    gas = 'газ',
    electra = 'эл/энергия',
    renew = 'ВИЭ',
  }

  type powerCase = {
    labels: ['черем. уголь', 'уголь', 'древесина', 'мазут', 'газ', 'эл/энергия', 'ВИЭ'];
    data: number[];
    color: ['#595959', '#b3b3b3', '#56db40', '#ffd21e', '#1e98ff', '#b51eff', '#ed4543'];
  };

  const powerIrk: powerCase[] = [
    powerCurIrk,
    powerCoalIrk,
    powerElectraIrk,
    powerGasIrk,
    powerRenewIrk,
  ] as powerCase[];

  const powerBur: powerCase[] = [
    powerCurBur,
    powerCoalBur,
    powerElectraBur,
    powerGasBur,
    powerRenewBur,
  ] as powerCase[];

  return (
    <div className="chartsBlock">
      <BarChart amountCaseOut={amountIrk[caseIndex]} />
      <BarChart amountCaseOut={amountBur[caseIndex]} />
      <DonatChart powerCaseOut={powerIrk[caseIndex]} />
      <DonatChart powerCaseOut={powerBur[caseIndex]} />
    </div>
  );
};
export default ChartsBlock;
