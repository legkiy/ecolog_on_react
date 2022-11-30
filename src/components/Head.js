import React from 'react';
import logo from '../img/logo-white.png';
import { IoArrowBackOutline } from 'react-icons/io5';
import { BsFillPersonLinesFill } from 'react-icons/bs';

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
        <div className="head-text contacts">
          <div className="contact">
            <BsFillPersonLinesFill />
            <p>Исполнители: </p>
            <a
              href="https://isem.irk.ru/institute/departments/60/"
              className="link department-60"
            >
              <p>отдел 60</p>
            </a>
          </div>
          <div className="contact">
            Контакты:
            <p>
              Иванова Ирина Юьевна nord@isem.irk.ru (содержание страницы),
              <br /> Максаков Никита Владимирович nikita.max@isem.irk.ru (тех.
              реализация)
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
