import React from 'react';
import ReactTooltip from 'react-tooltip';
import TableData from './TableData';

function Table(props) {
  const tooltip = ['Вслывающее окно lib'];
  return (
    <div>
      <div className="table-box">
        <table className="curr-status-table">
          <thead>
            <tr>
              <td rowSpan={3}>
                Субъект РФ,
                <br />
                район
              </td>
              <td colSpan={5} rowSpan={2}>
                Расход топлива, т у.т./год
              </td>
              <td colSpan={4}>Выбросы в атмосферу, т/год</td>
              <td rowSpan={3} className="last-td">
                ЗШО*,
                <br />
                т/год
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Загрязняющие вещества</td>
              <td rowSpan={2}>
                <i>
                  CO<sub>2</sub>
                </i>
                *
              </td>
            </tr>
            <tr>
              <td data-tip={tooltip[0]}>
                уголь
                <ReactTooltip
                  className="tooltip"
                  delayHide={100}
                  multiline={true}
                  effect="solid"
                  arrowColor="#ffffff"
                  offset={{ top: -6, left: 0 }}
                />
              </td>
              <td className="wood">
                древесина
                <span className="tooltip-span">Вслывающее окно span</span>
              </td>
              <td>мазут</td>
              <td>газ</td>
              <td>эл/энергия</td>
              <td>
                твердые
                <br />
                частицы
              </td>
              <td>
                <i>
                  SO<sub>2</sub>
                </i>
                *
              </td>
              <td>
                <i>
                  NO<sub>x</sub>*
                </i>
              </td>
            </tr>
          </thead>
          <TableData scriptIndex={props.scriptIndex} />
        </table>
      </div>
      <div className="table-legend-box">
        <ul className="table-legend">
          <li className="ico-table-legend">&mdash;улучшение;</li>
          <li className="ico-table-legend">&mdash;ухудшение;</li>
          <li className="ico-table-legend">&mdash;не изменилось.</li>
        </ul>
      </div>
      <div className="footnote">
        <ul>
          <li>
            <i>
              SO<sub>2</sub>
            </i>{' '}
            &mdash; диоксид серы
          </li>
          <li>
            <i>
              NO<sub>x</sub>
            </i>
            &mdash; оксиды азота
          </li>
          <li>
            <i>
              CO<sub>2</sub>
            </i>{' '}
            &mdash; диоксид углерода
          </li>
          <li>ЗШО &mdash; золошлаковые отходы</li>
        </ul>
      </div>
    </div>
  );
}

export default Table;
