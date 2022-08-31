import React from 'react';
import region from './boilerScript/regions.json';
import script1 from './boilerScript/script1.json';
import script2 from './boilerScript/script2.json';
import RegionScript from './RegionScript';

function TableData(props) {
  const scripts = [script1, script2];
  console.log(props.scriptIndex);
  return (
    <>
      {region.map((curState, index) => (
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
            <td>{curState.coal === 0 ? '-' : curState.coal}</td>
            <td>{curState.wood === 0 ? '-' : curState.wood}</td>
            <td>{curState.oil === 0 ? '-' : curState.oil}</td>
            <td>{curState.gas === 0 ? '-' : curState.gas}</td>
            <td>{curState.electric === 0 ? '-' : curState.electric}</td>
            <td>{curState.solid === 0 ? '-' : curState.solid}</td>
            <td>{curState.sulfur === 0 ? '-' : curState.sulfur}</td>
            <td>{curState.nitrogen === 0 ? '-' : curState.nitrogen}</td>
            <td>{curState.carbon === 0 ? '-' : curState.carbon}</td>
            <td>{curState.ash === 0 ? '-' : curState.ash}</td>
          </tr>
          {/* {props.scriptIndex} */}
          {props.scriptIndex !== null ? (
            scripts[props.scriptIndex].map((scripts) =>
              curState.id === scripts.id ? (
                <RegionScript
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
