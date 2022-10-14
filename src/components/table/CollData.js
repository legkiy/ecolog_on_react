import React from 'react';

export default function CollData({ coll, scripts, curState }) {
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
      {(curState[coll] ? (scripts[coll] / curState[coll]) * 100 : 100).toFixed(
        1
      ) + '%'}
      {/* {scripts[coll] === 0 ? '-' : scripts[coll]} */}
    </td>
  );
}
