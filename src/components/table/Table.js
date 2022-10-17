import React from 'react';
import TableData from './TableData';

function Table({ scriptIndex }) {
  return (
    <div>
      <div className="table-box">
        <table className="curr-status-table">
          <thead>
            <tr>
              <td rowSpan={4}>
                Субъект РФ,
                <br />
                район
              </td>
              <td colSpan={6} rowSpan={2}>
                Расход топлива, т у.т./год
              </td>
              <td colSpan={4}>Выбросы в атмосферу, т/год</td>
              <td rowSpan={4} className="last-td">
                ЗШО*,
                <br />
                т/год
              </td>
            </tr>
            <tr>
              <td colSpan={3}>Загрязняющие вещества</td>
              <td rowSpan={3}>
                <i>
                  CO<sub>2</sub>
                </i>
                *
              </td>
            </tr>
            <tr>
              <td colSpan={2}>уголь</td>
              <td rowSpan={2}>древесина</td>
              <td rowSpan={2}>мазут</td>
              <td rowSpan={2}>газ</td>
              <td rowSpan={2}>эл/энергия</td>
              <td rowSpan={2}>
                твердые
                <br />
                частицы
              </td>
              <td rowSpan={2}>
                <i>
                  SO<sub>2</sub>
                </i>
                *
              </td>
              <td rowSpan={2}>
                <i>
                  NO<sub>x</sub>*
                </i>
              </td>
            </tr>
            <tr>
              <td>черем.</td>
              <td>прочий</td>
            </tr>
          </thead>
          <TableData scriptIndex={scriptIndex} />
        </table>
      </div>
      <div className="table-legend-box">
        <ul className="table-legend">
          <li className="ico-table-legend">&mdash;текущее состояние;</li>
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
