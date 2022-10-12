import React from 'react';

function RegionTable({ scripts, curState }) {
  return (
    <tr className={scripts.total ? 'reg-total' : 'reg-row'}>
      <td
        className={
          scripts.coal < curState.coal
            ? 'better'
            : scripts.coal > curState.coal
            ? 'worse'
            : 'equally'
        }
      >
        {/* {(curState.coal ? (scripts.coal / curState.coal) * 100 : 100).toFixed(
          1
        ) + '%'} */}
        {scripts.coal === 0 ? '-' : scripts.coal}
      </td>
      <td
        className={
          scripts.wood < curState.wood
            ? 'better'
            : scripts.wood > curState.wood
            ? 'worse'
            : 'equally'
        }
      >
        {/* {(curState.wood ? (scripts.wood / curState.wood) * 100 : 100).toFixed(
          1
        ) + '%'} */}
        {scripts.wood === 0 ? '-' : scripts.wood}
      </td>
      <td
        className={
          scripts.oil < curState.oil
            ? 'better'
            : scripts.oil > curState.oil
            ? 'worse'
            : 'equally'
        }
      >
        {/* {(curState.oil ? (scripts.oil / curState.oil) * 100 : 100).toFixed(1) +
          '%'} */}
        {scripts.oil === 0 ? '-' : scripts.oil}
      </td>
      <td
        className={
          scripts.gas < curState.gas
            ? 'better'
            : scripts.gas > curState.gas
            ? 'worse'
            : 'equally'
        }
      >
        {/* {(curState.gas ? (scripts.gas / curState.gas) * 100 : 100).toFixed(1) +
          '%'} */}
        {scripts.gas === 0 ? '-' : scripts.gas}
      </td>
      <td
        className={
          scripts.electric < curState.electric
            ? 'better'
            : scripts.electric > curState.electric
            ? 'worse'
            : 'equally'
        }
      >
        {/* {(curState.electric
          ? (scripts.electric / curState.electric) * 100
          : 100
        ).toFixed(1) + '%'} */}
        {scripts.electric === 0 ? '-' : scripts.electric}
      </td>
      <td
        className={
          scripts.solid < curState.solid
            ? 'better'
            : scripts.solid > curState.solid
            ? 'worse'
            : 'equally'
        }
      >
        {/* {(curState.solid
          ? (scripts.solid / curState.solid) * 100
          : 100
        ).toFixed(1) + '%'} */}
        {scripts.solid === 0 ? '-' : scripts.solid}
      </td>
      <td
        className={
          scripts.sulfur < curState.sulfur
            ? 'better'
            : scripts.sulfur > curState.sulfur
            ? 'worse'
            : 'equally'
        }
      >
        {/* {(curState.sulfur
          ? (scripts.sulfur / curState.sulfur) * 100
          : 100
        ).toFixed(1) + '%'} */}
        {scripts.sulfur === 0 ? '-' : scripts.sulfur}
      </td>
      <td
        className={
          scripts.nitrogen < curState.nitrogen
            ? 'better'
            : scripts.nitrogen > curState.nitrogen
            ? 'worse'
            : 'equally'
        }
      >
        {/* {(curState.nitrogen
          ? (scripts.nitrogen / curState.nitrogen) * 100
          : 100
        ).toFixed(1) + '%'} */}
        {scripts.nitrogen === 0 ? '-' : scripts.nitrogen}
      </td>
      <td
        className={
          scripts.carbon < curState.carbon
            ? 'better'
            : scripts.carbon > curState.carbon
            ? 'worse'
            : 'equally'
        }
      >
        {/* {(curState.carbon
          ? (scripts.carbon / curState.carbon) * 100
          : 100
        ).toFixed(1) + '%'} */}
        {scripts.carbon === 0 ? '-' : scripts.carbon}
      </td>
      <td
        className={
          scripts.ash < curState.ash
            ? 'better'
            : scripts.ash > curState.ash
            ? 'worse'
            : 'equally'
        }
      >
        {/* {(curState.ash ? (scripts.ash / curState.ash) * 100 : 100).toFixed(1) +
          '%'} */}
        {scripts.ash === 0 ? '-' : scripts.ash}
      </td>
    </tr>
  );
}

export default RegionTable;
