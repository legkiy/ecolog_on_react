import React from 'react';
import ScriptButton from './ScriptButton';

function ScriptSlection({ setScriptIndex, scriptIndex }) {
  return (
    <div className="script-selection-box center-inside">
      <div className="center-inside">
        <h2 className="script-selection-title">Energetic resources</h2>
        <ScriptButton
          scriptIndex={scriptIndex}
          scriptCase={'wood'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div className="tippy-div">
              <p>Производители древесного топлива</p>
            </div>
          }
        />
        <ScriptButton
          scriptIndex={scriptIndex}
          scriptCase={'solar'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>Показатели гелиопотенциала </p>
            </div>
          }
        />
        <ScriptButton
          scriptIndex={scriptIndex}
          scriptCase={'wind'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div className="tooltip-box">
              <p>Показатели ветропотенциала</p>
            </div>
          }
        />
        <ScriptButton
          scriptIndex={scriptIndex}
          scriptCase={'termal'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div className="tooltip-box">
              <p>Показатели геопотенциала</p>
            </div>
          }
        />
      </div>
      <div className="horizontal-border"></div>
      <div className="center-inside">
        <button
          className={`no-select ${scriptIndex === 0 && 'selected-now-script'}`}
          onClick={() => setScriptIndex(0)}
          type="button"
        >
          Current state
        </button>
        <div className="horizontal-border"></div>
        <h2 className="script-selection-title">Scenario</h2>
        <ScriptButton
          scriptIndex={scriptIndex}
          scriptCase={'coal'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <h4>Coal</h4>
              <p>
                – replacement of Cheremkhovo coal in 31 boiler houses of the
                Slyudyansky district (9 units) and Kabansky district (22 units)
                with more environmentally friendly brown coal;
                <br /> – increase in fuel consumption from 26.3 to 28.4 thousand
                tonnes/year.
              </p>
            </div>
          }
        />
        <ScriptButton
          scriptIndex={scriptIndex}
          scriptCase={'electra'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <h4>Электрический</h4>
              <p>
                Использование электроэнергии на цели теплоснабжения: <br />-
                замещение угля в количестве 316,2 тыс. т и мазута 1,1 тыс. т на
                электроэнергию;
                <br />- существующие котельные на древесном и газовом топливе
                продолжают функционировать. Суммарная потребность в
                электроэнергии 969 млн кВт·ч/год.
              </p>
            </div>
          }
        />
        <ScriptButton
          scriptIndex={scriptIndex}
          scriptCase={'gas'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <h4>Gas</h4>
              <p>
                – replacement of coal in boiler houses with liquefied and
                pipeline natural gas;
                <br /> – existing wood-burning and electric boiler houses
                continue to function. The total demand for natural gas is 40
                million m3/year, for LNG 55 thousand tonnes/year.
              </p>
            </div>
          }
        />
        <ScriptButton
          scriptIndex={scriptIndex}
          scriptCase={'renew'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <h4>Возобновляеммая энергетика</h4>
              <p>
                - сооружение гибридных солнечно-дизельных комплексов в 3
                населенных пунктах;
                <br />- строительство малых ГЭС в 2 населенных пунктах;
                <br />- замена 6 угольных котельных на теплонасосные установки;
                <br />- замещение угля отходами деревообработки в 7 котельных и
                пеллетами в 1 котельной. Вытеснение дизельного топлива 93 т/год.
                Дополнительная потребность в электроэнергии 0,9 млн кВт·ч/год, в
                отходах деревообработки 3,6 тыс. т/год, в пеллетах - 0,4 тыс.
                т/год.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default ScriptSlection;
