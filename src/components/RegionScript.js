import React from 'react';

function RegionTable(props) {
  return (
    <tr className={props.scripts.total ? 'reg-total' : 'reg-row'}>
      <td
        className={
          props.scripts.coal < props.curState.coal
            ? 'better'
            : props.scripts.coal > props.curState.coal
            ? 'worse'
            : 'equally'
        }
      >
        {props.curState.coal !== 0
          ? ((props.scripts.coal / props.curState.coal) * 100).toFixed(1)
          : 100.0}
        %{/* {props.scripts.coal === 0 ? '-' :props.scripts.coal} */}
      </td>
      <td
        className={
          props.scripts.wood < props.curState.wood
            ? 'better'
            : props.scripts.wood > props.curState.wood
            ? 'worse'
            : 'equally'
        }
      >
        {props.curState.wood !== 0
          ? ((props.scripts.wood / props.curState.wood) * 100).toFixed(1)
          : 100.0}
        %{/* {props.scripts.wood === 0 ? '-' :props.scripts.wood} */}
      </td>
      <td
        className={
          props.scripts.oil < props.curState.oil
            ? 'better'
            : props.scripts.oil > props.curState.oil
            ? 'worse'
            : 'equally'
        }
      >
        {props.curState.oil !== 0
          ? ((props.scripts.oil / props.curState.oil) * 100).toFixed(1)
          : 100.0}
        %{/* {props.scripts.oil === 0 ? '-' :props.scripts.oil} */}
      </td>
      <td
        className={
          props.scripts.gas < props.curState.gas
            ? 'better'
            : props.scripts.gas > props.curState.gas
            ? 'worse'
            : 'equally'
        }
      >
        {props.curState.gas !== 0
          ? ((props.scripts.gas / props.curState.gas) * 100).toFixed(1)
          : 100.0}
        %{/* {props.scripts.gas === 0 ? '-' :props.scripts.gas} */}
      </td>
      <td
        className={
          props.scripts.electric < props.curState.electric
            ? 'better'
            : props.scripts.electric > props.curState.electric
            ? 'worse'
            : 'equally'
        }
      >
        {props.curState.electric !== 0
          ? ((props.scripts.electric / props.curState.electric) * 100).toFixed(
              1
            )
          : 100.0}
        %{/* {props.scripts.electric === 0 ? '-' : props.scripts.electric} */}
      </td>
      <td
        className={
          props.scripts.solid < props.curState.solid
            ? 'better'
            : props.scripts.solid > props.curState.solid
            ? 'worse'
            : 'equally'
        }
      >
        {props.curState.solid !== 0
          ? ((props.scripts.solid / props.curState.solid) * 100).toFixed(1)
          : 100.0}
        %{/* {props.scripts.solid === 0 ? '-' :props.scripts.solid} */}
      </td>
      <td
        className={
          props.scripts.sulfur < props.curState.sulfur
            ? 'better'
            : props.scripts.sulfur > props.curState.sulfur
            ? 'worse'
            : 'equally'
        }
      >
        {props.curState.sulfur !== 0
          ? ((props.scripts.sulfur / props.curState.sulfur) * 100).toFixed(1)
          : 100.0}
        %{/* {props.scripts.sulfur === 0 ? '-' :props.scripts.sulfur} */}
      </td>
      <td
        className={
          props.scripts.nitrogen < props.curState.nitrogen
            ? 'better'
            : props.scripts.nitrogen > props.curState.nitrogen
            ? 'worse'
            : 'equally'
        }
      >
        {props.curState.nitrogen !== 0
          ? ((props.scripts.nitrogen / props.curState.nitrogen) * 100).toFixed(
              1
            )
          : 100.0}
        %{/* {props.scripts.nitrogen === 0 ? '-' :props.scripts.nitrogen} */}
      </td>
      <td
        className={
          props.scripts.carbon < props.curState.carbon
            ? 'better'
            : props.scripts.carbon > props.curState.carbon
            ? 'worse'
            : 'equally'
        }
      >
        {props.curState.carbon !== 0
          ? ((props.scripts.carbon / props.curState.carbon) * 100).toFixed(1)
          : 100.0}
        %{/* {props.scripts.carbon === 0 ? '-' :props.scripts.carbon} */}
      </td>
      <td
        className={
          props.scripts.ash < props.curState.ash
            ? 'better'
            : props.scripts.ash > props.curState.ash
            ? 'worse'
            : 'equally'
        }
      >
        {props.curState.ash !== 0
          ? ((props.scripts.ash / props.curState.ash) * 100).toFixed(1)
          : 100.0}
        %{/* {props.scripts.ash === 0 ? '-' :props.scripts.ash} */}
      </td>
    </tr>
  );
}

export default RegionTable;
