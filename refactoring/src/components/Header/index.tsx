import { FC } from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import style from './Header.module.scss';
interface IHeader {}

const Header: FC<IHeader> = () => {
  const mobile = useMediaQuery('(max-width:930px)');
  console.log(mobile);

  return (
    <AppBar className={style.header} position="relative">
      <a className={style['isem-link']} href="https://isem.irk.ru/">
        <Toolbar>
          <ArrowBackRoundedIcon className={style['back-icon']} />
          <Typography>
            {mobile ? (
              <>ИСЕМ СО РАН</>
            ) : (
              <>
                Федеральное государственное бюджетное учреждение науки
                <br />
                Институт систем энергетики им. Л.А. Мелентьева Сибирского
                отделения Российской академии наук
              </>
            )}
          </Typography>
        </Toolbar>
      </a>
    </AppBar>
  );
};

export default Header;
