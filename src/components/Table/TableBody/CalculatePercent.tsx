interface IPropsTableBody {
  scripts: any;
  tableCurr: any;
  collumn: string;
}

const CalculatePercent = ({ scripts, tableCurr, collumn }: IPropsTableBody) => {
  let perInTable = Math.ceil(((scripts[collumn] - tableCurr[collumn]) / tableCurr[collumn]) * 100);

  if (tableCurr[collumn] === 0 && perInTable > 0) perInTable = 100;
  else if (tableCurr[collumn] === 0) perInTable = 0;

  return (
      <td
        className={
          scripts[collumn] < tableCurr[collumn]
            ? 'better'
            : scripts[collumn] > tableCurr[collumn]
            ? 'worse'
            : 'equally'
        }
      >
        {perInTable + '%'}
        {/* {(tableCurr[collumn] ? perInTable : 100).toFixed(
        1
      ) + '%'} */}
        {/* {scripts[collumn] === 0 ? '-' : scripts[collumn]} */}
        {/* {Math.ceil(tableCurr[collumn] ? perInTable : tableCurr[collumn]).toFixed(1) + '%'} */}
      </td>
  );
};

export default CalculatePercent;
