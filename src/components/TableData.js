import React from "react";
import Regions from "./boilerScript/regions.json";
import Script1 from "./boilerScript/script1.json";
import Script2 from "./boilerScript/script2.json";
import RegionScript from "./RegionScript";

export default class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: Regions,
      scripts: Script2,
    };
  }

  render() {
    return (
      <>
        {this.state.regions.map((curState, index) => (
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
            {this.state.scripts.length > 0 ? (
              this.state.scripts.map((scripts) =>
                curState.id === scripts.id ? (
                  <RegionScript
                    key={scripts.id}
                    region={scripts}
                    curState={curState}
                  />
                ) : null
              )
            ) : (
              <td colSpan={5}>Выберете сценарий</td>
            )}
          </tbody>
        ))}
      </>
    );
  }
}
