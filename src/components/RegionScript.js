import React from "react";

function RegionTable (props){
  // region = this.props.region;
  // curState = this.props.curState;
    return (
      <tr className={props.scripts.total ? "reg-total" : "reg-row"}>
        <td
          className={
            props.scripts.solid < props.curState.solid || props.scripts.solid === "-"
              ? "better"
              : "worse"
          }
        >
          {props.scripts.solid}
        </td>
        <td
          className={
            props.scripts.sulfur < props.curState.sulfur ||
            props.scripts.sulfur === "-"
              ? "better"
              : "worse"
          }
        >
          {props.scripts.sulfur}
        </td>
        <td
          className={
            props.scripts.nitrogen < props.curState.nitrogen ||
            props.scripts.nitrogen === "-"
              ? "better"
              : "worse"
          }
        >
          {props.scripts.nitrogen}
        </td>
        <td
          className={
            props.scripts.carbon < props.curState.carbon ||
            props.scripts.carbon === "-"
              ? "better"
              : "worse"
          }
        >
          {props.scripts.carbon}
        </td>
        <td
          className={
            props.scripts.ash < props.curState.ash || props.scripts.ash === "-"
              ? "better"
              : "worse"
          }
        >
          {props.scripts.ash}
        </td>
      </tr>
    );
  }

export default RegionTable