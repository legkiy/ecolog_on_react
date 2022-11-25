import React from 'react';
import logo from '../img/logo-white.png';
import { IoArrowBackOutline } from 'react-icons/io5';

export default function Head() {
  return (
    <header className="head">
      <div className="box-80 links">
        <a href="https://isem.irk.ru/solutions/" className="link">
          <IoArrowBackOutline />
          Назад
        </a>
        <a href="https://isem.irk.ru/" className="link">
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
