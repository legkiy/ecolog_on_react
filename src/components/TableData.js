import React from "react";
import region from "./boilerScript/regions.json";
import script1 from "./boilerScript/script1.json";
import script2 from "./boilerScript/script2.json";
import RegionScript from "./RegionScript";

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
                  ${index % 2 === 0 ? "even" : ""} 
                  ${curState.total ? "reg-total" : "reg-row"}
                `}
          >
            <td className="reg-name" rowSpan={2}>
              {curState.localName}
            </td>
            <td rowSpan={2}>{curState.coal}</td>
            <td rowSpan={2}>{curState.wood}</td>
            <td rowSpan={2}>{curState.oil}</td>
            <td rowSpan={2}>{curState.gas}</td>
            <td rowSpan={2}>{curState.electric}</td>
            <td>{curState.solid}</td>
            <td>{curState.sulfur}</td>
            <td>{curState.nitrogen}</td>
            <td>{curState.carbon}</td>
            <td>{curState.ash}</td>
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
            <td>Выбирете сценарий</td>
          )}
        </tbody>
      ))}
    </>
  );
}

export default TableData;
