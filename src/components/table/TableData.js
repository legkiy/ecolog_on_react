import React from 'react';
import now_script from './boilerScript/now_script.json';
import script1 from './boilerScript/coal_script.json';
import script2 from './boilerScript/electra_script.json';
import script3 from './boilerScript/gas_script.json';
import script4 from './boilerScript/renew_script.json';

import TableScriptChosen from './TableScriptChosen';

function TableData({ scriptIndex }) {
  const scripts = [null, script1, script2, script3, script4];

  return (
    <>
      {now_script.map((curState, index) => (
        <tbody key={index}>
          <tr
            key={curState.id}
            className={`
                  ${curState.total ? 'reg-total' : 'reg-row'}
                `}
          >
            <td className="reg-name" rowSpan={2}>
              {curState.localName}
            </td>
            <td>{curState.cherem_coal ? curState.cherem_coal : '-'}</td>
            <td>{curState.coal ? curState.coal : '-'}</td>
            <td>{curState.wood ? curState.wood : '-'}</td>
            <td>{curState.oil ? curState.oil : '-'}</td>
            <td>{curState.gas ? curState.gas : '-'}</td>
            <td>{curState.electric ? curState.electric : '-'}</td>
            <td>{curState.solid ? curState.solid : '-'}</td>
            <td>{curState.sulfur ? curState.sulfur : '-'}</td>
            <td>{curState.nitrogen ? curState.nitrogen : '-'}</td>
            <td>{curState.carbon ? curState.carbon : '-'}</td>
            <td>{curState.ash ? curState.ash : '-'}</td>
          </tr>
          {/* {scriptIndex} */}
          {scriptIndex !== 0 ? (
            scripts[scriptIndex].map((scripts) =>
              curState.id === scripts.id ? (
                <TableScriptChosen
                  key={scripts.id}
                  scripts={scripts}
                  curState={curState}
                />
              ) : null
            )
          ) : (
            <tr>
              <td colSpan={10} className="dont-chose">
                Выберите сценарий
              </td>
            </tr>
          )}
        </tbody>
      ))}
    </>
  );
}

export default TableData;
