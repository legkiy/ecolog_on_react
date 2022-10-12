import React from 'react';
import ScriptButton from './ScriptButton';

function ScriptSlection({ setScriptIndex }) {
  // console.log(setScriptIndex)
  return (
    <div className="script-selection-box center-inside">
      <div className="center-inside">
        <h2 className="script-selection-title">Энергетические ресурсы</h2>
        <ScriptButton
          scriptCase={'wood'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div className="tippy-div">
              <p>Производителли древесного топлива</p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'solar'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>Показатели гелиопотенциала </p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'wind'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div className="tooltip-box">
              <p>Показатели ветроэнергетического потенциала</p>
            </div>
          }
        />
      </div>
      <div className="horizontal-border"></div>
      <div className="center-inside">
        <button
          className="no-select"
          onClick={() => setScriptIndex(0)}
          type="button"
        >
          Текущее состояние
        </button>
        <div className="horizontal-border"></div>
        <h2 className="script-selection-title">Cценарии</h2>
        <ScriptButton
          scriptCase={'electra'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>
                Использование электроэнергии на цели теплоснабжения; замещение
                всего угля в количестве 316,2 тыс. т и мазутной котельной (1,1
                тыс.т) - на электроэнергию, при этом существующие котельные на
                древесном и газовом топливе, как наиболее экологичные продолжают
                функционировать
              </p>
            </div>
          }
        />
        <ScriptButton
          scriptCase={'coal'}
          setScriptIndex={setScriptIndex}
          scriptDiscriptions={
            <div>
              <p>
                Предлагается в 34 котельных Слюдянского (9 котельных) и
                Кабанского (25 шт.) районов сжигать экологически более
                благоприятный бюородинский бурый уголь. При этом увеличится
                расход топлива с 26,3 до 28,4 тыс. т/год.
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default ScriptSlection;
