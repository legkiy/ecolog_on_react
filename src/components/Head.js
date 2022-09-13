import React from 'react';
import logo from '../img/logo-white.png';

export default function Head() {
  return (
    <header className="head">
      <div className="box-80">
        <a href="https://isem.irk.ru/" id="isem-link">
          <img src={logo} alt="Логотип ИСЭМ"></img>
          <h2 className="head-text">
            Федеральное государственное бюджетное учреждение науки
            <br />
            Институт систем энергетики им. Л.А. Мелентьева Сибирского отделения
            Российской академии наук
          </h2>
        </a>
      </div>
    </header>
  );
}
