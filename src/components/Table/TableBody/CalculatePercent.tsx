export default function CalculatePercent({}) {
  let perInTable = Math.ceil(((scripts[coll] - curState[coll]) / curState[coll]) * 100);

  if (curState[coll] === 0 && perInTable > 0) perInTable = 100;
  else if (curState[coll] === 0) perInTable = 0;

  return (
    <tr>
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
    </tr>
  );
}
