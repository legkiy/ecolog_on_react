import React, { Component } from "react";
import regions from "./boilerScript/regions.json";
import barOlh from "../img/bar-chart/bar-olh.png";
import barIrk from "../img/bar-chart/bar-irk.png";
import barSlud from "../img/bar-chart/bar-slud.png";
import barKab from "../img/bar-chart/bar-kab.png";
import barBarg from "../img/bar-chart/bar-barg.png";
import barPribaik from "../img/bar-chart/bar-pribaik.png";
import barCitySev from "../img/bar-chart/bar-citysev.png";
import barSev from "../img/bar-chart/bar-sev.png";
import ringIrk from "../img/bar-chart/ringIrk.png";
import ringBur from "../img/bar-chart/ringBur.png";

export default class PieImg extends Component {
  render() {
    return (
      <div>
        <div className="table-box">
          <table className="chart-table">
            <tbody>
              <tr>
                <td rowSpan={3} className="reg-name">
                  <h3>Кол-во котельных</h3>
                </td>
                <td colSpan={3}>Иркутская область</td>
                <td colSpan={7}>Республика Бурятия</td>
              </tr>
              <tr>
                <td>
                  <img className="img1" src={barOlh} alt="Ольхонский"></img>
                </td>
                <td>
                  <img className="img1" src={barIrk} alt="Иркутский"></img>
                </td>
                <td className="right-bord">
                  <img className="img1" src={barSlud} alt="Слюдянский"></img>
                </td>
                <td className="chart-bord">
                  <img className="img1" src={barKab} alt="Кабанский"></img>
                </td>
                <td>
                  <img className="img1" src={barBarg} alt="Баргузинский"></img>
                </td>
                <td>
                  <img
                    className="img1"
                    src={barPribaik}
                    alt="Прибайкальский"
                  ></img>
                </td>
                <td>
                  <img
                    className="img1"
                    src={barCitySev}
                    alt="г.Северобайкальск"
                  ></img>
                </td>
                <td>
                  <img
                    className="img1"
                    src={barSev}
                    alt="Северо-Байкальский"
                  ></img>
                </td>
              </tr>
              <tr>
                {this.regions.map((locate, index) =>
                  locate.total ? null : (
                    <td
                      key={locate.id}
                      className={index === 5 ? "chart-bord" : ""}
                    >
                      {locate.localName}
                    </td>
                  )
                )}
              </tr>
              <tr>
                <td className="reg-name">
                  <h3>
                    Установленная мощность,
                    <br /> Гкал/ч
                  </h3>
                </td>
                <td colSpan={3}>
                  <img
                    className="img2"
                    src={ringIrk}
                    alt="мощноть Иркутск"
                  ></img>
                </td>
                <td colSpan={3} className="chart-bord">
                  <img
                    className="img2"
                    src={ringBur}
                    alt="мощноть Бурятия"
                  ></img>
                </td>
                <td colSpan={2}>
                  <ul className="bar-legend">
                    <li className="ico-legend">уголь</li>
                    <li className="ico-legend">древесина</li>
                    <li className="ico-legend">мазут</li>
                    <li className="ico-legend">газ</li>
                    <li className="ico-legend">эл/энергия</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
