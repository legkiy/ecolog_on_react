import React from 'react';

export default function CollData({ coll, scripts, curState }) {
  let perInTable = scripts[coll] / curState[coll];
  return (
    <td
      className={
        scripts[coll] < curState[coll]
          ? 'better'
          : scripts[coll] > curState[coll]
          ? 'worse'
          : 'equally'
      }
    >
      {/* {(curState[coll] ? (perInTable) * 100 : 100).toFixed(
        1
      ) + '%'} */}
      {/* {scripts[coll] === 0 ? '-' : scripts[coll]} */}
      {(curState[coll] !== 0 ? (perInTable - 1) * 100 : curState[coll]).toFixed(
        1
      ) + '%'}
    </td>
  );
}
