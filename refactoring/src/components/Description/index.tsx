import { FC } from 'react';
import style from './Description.module.scss';

interface IDescription {}
const Description: FC<IDescription> = ({}) => {
  return <div className={style.description}>Description</div>;
};
export default Description;
