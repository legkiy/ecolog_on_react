import React from 'react';
import CollData from './CollData';

function TableScriptChosen({ scripts, curState }) {
  return (
    <tr className={scripts.total ? 'reg-total' : 'reg-row'}>
      <CollData coll={'cherem_coal'} scripts={scripts} curState={curState} />
      <CollData coll={'coal'} scripts={scripts} curState={curState} />
      <CollData coll={'wood'} scripts={scripts} curState={curState} />
      <CollData coll={'oil'} scripts={scripts} curState={curState} />
      <CollData coll={'gas'} scripts={scripts} curState={curState} />
      <CollData coll={'electric'} scripts={scripts} curState={curState} />
      <CollData coll={'solid'} scripts={scripts} curState={curState} />
      <CollData coll={'sulfur'} scripts={scripts} curState={curState} />
      <CollData coll={'nitrogen'} scripts={scripts} curState={curState} />
      <CollData coll={'carbon'} scripts={scripts} curState={curState} />
      <CollData coll={'ash'} scripts={scripts} curState={curState} />
    </tr>
  );
}

export default TableScriptChosen;
