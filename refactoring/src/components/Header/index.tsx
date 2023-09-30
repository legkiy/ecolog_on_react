import { FC } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import style from './Header.module.scss';
interface IHeader {}
const Header: FC<IHeader> = () => {
  return (
    <AppBar className={style.header} position="relative">
      <a className={style['isem-link']} href="https://isem.irk.ru/">
        <Toolbar>
          <ArrowBackRoundedIcon className={style['back-icon']} />
          <Typography>
            Федеральное государственное бюджетное учреждение науки
            <br />
            Институт систем энергетики им. Л.А. Мелентьева Сибирского отделения
            Российской академии наук
          </Typography>
        </Toolbar>
      </a>
    </AppBar>
  );
};
export default Header;
