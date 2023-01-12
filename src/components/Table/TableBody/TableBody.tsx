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
  const scripts = [tableCurr, tableCoal, tableElectra, tableGas, tableRenew];
  const caseIndex = useSelector((state: RootState) => state.case.caseIndex);

  return (
    <tbody className="tableBody">
      {tableCurr.map((tableCurr, index) => (
        <>
          <tr key={index}>
            <td className='reg-name' rowSpan={2}>{tableCurr.localName}</td>
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
                <tr key={scripts.id}>
                  <CalculatePercent
                    scripts={scripts}
                    tableCurr={tableCurr}
                    collumn={'cherem_coal'}
                  />
                  <CalculatePercent scripts={scripts} tableCurr={tableCurr} collumn={'coal'} />
                  <CalculatePercent scripts={scripts} tableCurr={tableCurr} collumn={'wood'} />
                  <CalculatePercent scripts={scripts} tableCurr={tableCurr} collumn={'oil'} />
                  <CalculatePercent scripts={scripts} tableCurr={tableCurr} collumn={'gas'} />
                  <CalculatePercent scripts={scripts} tableCurr={tableCurr} collumn={'electric'} />
                  <CalculatePercent scripts={scripts} tableCurr={tableCurr} collumn={'solid'} />
                  <CalculatePercent scripts={scripts} tableCurr={tableCurr} collumn={'sulfur'} />
                  <CalculatePercent scripts={scripts} tableCurr={tableCurr} collumn={'nitrogen'} />
                  <CalculatePercent scripts={scripts} tableCurr={tableCurr} collumn={'carbon'} />
                  <CalculatePercent scripts={scripts} tableCurr={tableCurr} collumn={'ash'} />
                </tr>
              ) : null
            )
          ) : (
            <tr>
              <td colSpan={11} className="dont-chose">
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
