import './TableBody.scss';

import tableCurr from './tableData/now_script.json';
import tableCoal from './tableData/coal_script.json';
import tableElectra from './tableData/electra_script.json';
import tableGas from './tableData/gas_script.json';
import tableRenew from './tableData/renew_script.json';

import CalculatePercent from './CalculatePercent';
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

interface IPropsTableBody {}

const TableBody = ({}: IPropsTableBody) => {
  const scripts = [null, tableCoal, tableElectra, tableGas, tableRenew];
  const caseIndex = useSelector((state: RootState) => state.case.caseIndex);

  return (
    <tbody className="tableBody">
      {tableCurr.map((tableCurr, index) => (
        <>
          <tr>
            <td rowSpan={2}>{tableCurr.localName}</td>
            <td>{tableCurr.cherem_coal ? tableCurr.cherem_coal : '-'}</td>
            <td>{tableCurr.coal ? tableCurr.coal : '-'}</td>
            <td>{tableCurr.wood ? tableCurr.wood : '-'}</td>
            <td>{tableCurr.oil ? tableCurr.oil : '-'}</td>
            <td>{tableCurr.gas ? tableCurr.gas : '-'}</td>
            <td>{tableCurr.electric ? tableCurr.electric : '-'}</td>
            <td>{tableCurr.solid ? tableCurr.solid : '-'}</td>
            <td>{tableCurr.sulfur ? tableCurr.sulfur : '-'}</td>
            <td>{tableCurr.nitrogen ? tableCurr.nitrogen : '-'}</td>
            <td>{tableCurr.carbon ? tableCurr.carbon : '-'}</td>
            <td>{tableCurr.ash ? tableCurr.ash : '-'}</td>
          </tr>
          {caseIndex !== 0 ? (
            scripts[caseIndex].map((scripts) =>
              tableCurr.id === scripts.id ? (
                <CalculatePercent scripts={scripts} curState={curState} />
              ) : null
            )
          ) : (
            <tr>
              <td colSpan={10} className="dont-chose">
                Выберите сценарий
              </td>
            </tr>
          )}
        </>
      ))}
    </tbody>
  );
};
export default TableBody;
