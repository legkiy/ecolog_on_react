import React, { useState } from 'react';
import YaMap from './YaMap';
import Table from './Table';
import ImgContainer from './Img-container';
import ScriptSlection from './ScriptSlection';
import BarChart from './charts/BarChart';

import curAmountIrk from './charts/data/curAmount/curAmountIrk.json';
import curAmountBur from './charts/data/curAmount/curAmountBur.json';
import script1Irk from './charts/data/script1/script1Irk.json';
import script1Bur from './charts/data/script1/script1Bur.json';
import script2Irk from './charts/data/script2/script2Irk.json';
import script2Bur from './charts/data/script2/script2Bur.json';

function Container() {
  const [scriptIndex, setScriptIndex] = useState(null);
  return (
    <div className="container box-80">
      <h1 className="title">
        Экологический мониторинг объектов теплоэнергетики Байкальской природной
        территории
      </h1>
      <div className="flex-box">
        <div className="left-box">
          <div className="discription">
            <p>
              Информационно-аналитическая система предназначена для мониторинга
              экологических характеристик функционирования энергетических
              объектов Байкальской природной территории и их изменения при
              реализации различных сценариев развития. Для этих целей создана
              база данных, включающая производственные показатели электростанций
              и коммунальных котельных, оказывающих влияние на природную среду
              прибрежных районов оз. Байкал, объемы сжигаемого топлива и его
              качественные характеристики. Разработана математическая модель
              оценки массы выбросов загрязняющих веществ и парниковых газов в
              атмосферу и образования золошлаковых отходов от электростанций и
              котельных.
            </p>
          </div>
          <ScriptSlection setScriptIndex={setScriptIndex} />
          <div>
            <h3>Коль-во котельных</h3>
            <div className="bar-1">
              <BarChart chartOut={curAmountIrk} />
            </div>
            <div className="bar-2">
              <BarChart chartOut={curAmountBur} />
            </div>
          </div>
          <Table scriptIndex={scriptIndex} />
        </div>
        <YaMap scriptIndex={scriptIndex} />
      </div>
    </div>
  );
}
export default Container;
