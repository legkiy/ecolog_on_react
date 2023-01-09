import './TableBody.scss'

import tableCur from './tableData/now_script.json';
import tableCoal from './tableData/coal_script.json';
import tableElectra from './tableData/electra_script.json';
import tableGas from './tableData/gas_script.json';
import tableRenew from './tableData/renew_script.json';

interface IPropsTableBody{
}

const TableBody = ({}:IPropsTableBody) => {
  return <div className='tableBody'></div>
}
export default TableBody