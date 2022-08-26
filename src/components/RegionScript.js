import React from "react";

function RegionTable(props) {
  return (
    <tr className={props.scripts.total ? "reg-total" : "reg-row"}>
      <td
        className={
          props.scripts.coal < props.curState.coal || props.scripts.coal === "-"
            ? "better"
            : props.scripts.coal > props.curState.coal
            ? "worse"
            : "equally"
        }
      >
        {props.scripts.coal}
      </td>
      <td
        className={
          props.scripts.wood < props.curState.wood || props.scripts.wood === "-"
            ? "better"
            : props.scripts.wood > props.curState.wood
            ? "worse"
            : "equally"
        }
      >
        {props.scripts.wood}
      </td>
      <td
        className={
          props.scripts.oil < props.curState.oil || props.scripts.oil === "-"
            ? "better"
            : props.scripts.oil > props.curState.oil
            ? "worse"
            : "equally"
        }
      >
        {props.scripts.oil}
      </td>
      <td
        className={
          props.scripts.gas < props.curState.gas || props.scripts.gas === "-"
            ? "better"
            : props.scripts.gas > props.curState.gas
            ? "worse"
            : "equally"
        }
      >
        {props.scripts.gas}
      </td>
      <td
        className={
          props.scripts.electric < props.curState.electric ||
          props.scripts.electric === "-"
            ? "better"
            : props.scripts.electric > props.curState.electric
            ? "worse"
            : "equally"
        }
      >
        {props.scripts.electric}
      </td>
      <td
        className={
          props.scripts.solid < props.curState.solid ||
          props.scripts.solid === "-"
            ? "better"
            : props.scripts.solid > props.curState.solid
            ? "worse"
            : "equally"
        }
      >
        {props.scripts.solid}
      </td>
      <td
        className={
          props.scripts.sulfur < props.curState.sulfur ||
          props.scripts.sulfur === "-"
            ? "better"
            : props.scripts.sulfur > props.curState.sulfur
            ? "worse"
            : "equally"
        }
      >
        {props.scripts.sulfur}
      </td>
      <td
        className={
          props.scripts.nitrogen < props.curState.nitrogen ||
          props.scripts.nitrogen === "-"
            ? "better"
            : props.scripts.nitrogen > props.curState.nitrogen
            ? "worse"
            : "equally"
        }
      >
        {props.scripts.nitrogen}
      </td>
      <td
        className={
          props.scripts.carbon < props.curState.carbon ||
          props.scripts.carbon === "-"
            ? "better"
            : props.scripts.carbon > props.curState.carbon
            ? "worse"
            : "equally"
        }
      >
        {props.scripts.carbon}
      </td>
      <td
        className={
          props.scripts.ash < props.curState.ash || props.scripts.ash === "-"
            ? "better"
            : props.scripts.ash > props.curState.ash
            ? "worse"
            : "equally"
        }
      >
        {props.scripts.ash}
      </td>
    </tr>
  );
}

export default RegionTable;
