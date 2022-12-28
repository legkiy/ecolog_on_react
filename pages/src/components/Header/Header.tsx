import Header from './';
import logoISEM from './logo-white.png';
import { IoArrowBackOutline } from 'react-icons/io5';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="header">
      <div className="head">
        <a href="https://isem.irk.ru/solutions/" className="back-link link">
          <IoArrowBackOutline /> <p>Назад</p>
        </a>
        <a href="https://isem.irk.ru/" className="link">
          <img src={logoISEM}></img>
          <h2>
            Федеральное государственное бюджетное учреждение науки
            <br />
            Институт систем энергетики им. Л.А. Мелентьева Сибирского отделения Российской академии
            наук
          </h2>
        </a>
        <div className="contacts">
          <div className="contact">
            <BsFillPersonLinesFill />
            <p>Исполнители:&nbsp;</p>
            <a href="https://isem.irk.ru/institute/departments/60/" className="dapartmet-60 link">
              <p>отдел 60</p>
            </a>
          </div>
          <div className="contact">
            Контакты:&nbsp;
            <p>
              Иванова Ирина Юрьевна&nbsp;
              <a className="mail" href="mailto:nord@isem.irk.ru">
                nord@isem.irk.ru
              </a>
              (содержание страницы)
              <br />
              Максаков Никита Владимирович&nbsp;
              <a className="mail" href="mailto:nikita.max@isem.irk.ru">
                nikita.max@isem.irk.ru
              </a>
              (тех. реализация)
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
