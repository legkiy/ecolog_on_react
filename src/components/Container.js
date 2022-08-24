import React, { useState } from "react";
import YaMap from "./YaMap";
import Table from "./Table";
import ImgContainer from "./Img-container";
import ScriptSlection from "./ScriptSlection";

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
          <ImgContainer />
          <Table scriptIndex={scriptIndex} />
        </div>
        <YaMap scriptIndex={scriptIndex}/>
      </div>
    </div>
  );
}
export default Container;
