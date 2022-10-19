import React from 'react';

export default function CollData({ coll, scripts, curState }) {
  // let perInTable = Math.ceil((scripts[coll] / curState[coll] - 1) * 100);
  let perInTable = Math.ceil((scripts[coll] / curState[coll] - 1) * 100);

  if (curState[coll]) {
    if (perInTable % 100 === 0) {
      perInTable = perInTable.toFixed(0);
    } else perInTable = perInTable.toFixed(0);
  } else perInTable = curState[coll];

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
      {perInTable + '%'}
      {/* {(curState[coll] ? perInTable : 100).toFixed(
        1
      ) + '%'} */}
      {/* {scripts[coll] === 0 ? '-' : scripts[coll]} */}
      {/* {Math.ceil(curState[coll] ? perInTable : curState[coll]).toFixed(1) + '%'} */}
    </td>
  );
}
