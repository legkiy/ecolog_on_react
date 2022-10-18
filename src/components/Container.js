import React, { useState } from 'react';
import MainBox from './mainBoxFolder/MainBox';
import ScriptSlection from './ScriptSlection';

function Container() {
  const [scriptIndex, setScriptIndex] = useState(0);
  console.log(scriptIndex);
  return (
    <div className="container box-80">
      <div className="discription">
        <h1 className="title">
          Мониториг Центральной экологической зоны Байкала
        </h1>
        <p>
          Информационно-аналитическая система предназначена для мониторинга
          экологических характеристик функционирования энергетических объектов
          Байкальской природной территории и их изменения при реализации
          различных сценариев развития. Для этих целей создана база данных,
          включающая производственные показатели электростанций и коммунальных
          котельных, оказывающих влияние на природную среду прибрежных районов
          оз. Байкал, объемы сжигаемого топлива и его качественные
          характеристики. Разработана математическая модель оценки массы
          выбросов загрязняющих веществ и парниковых газов в атмосферу и
          образования золошлаковых отходов от электростанций и котельных.
        </p>
      </div>
      <ScriptSlection setScriptIndex={setScriptIndex} />
      <MainBox scriptIndex={scriptIndex} />
    </div>
  );
}
export default Container;
