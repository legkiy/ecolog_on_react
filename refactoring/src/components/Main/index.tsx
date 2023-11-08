import { FC, ReactNode } from 'react';
import style from './Main.module.scss';
interface IMain {
  children: ReactNode;
}
const Main: FC<IMain> = ({ children }) => {
  return <main className={style.main}>{children}</main>;
};
export default Main;
