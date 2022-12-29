import './Button.scss';
import {
  GiLightningArc,
  GiCoalWagon,
  GiWoodPile,
  GiSolarPower,
  GiWindTurbine,
  GiFuelTank,
} from 'react-icons/gi';
import { BsThermometerHalf } from 'react-icons/bs';
import recyclePower from './recyclePower.png';

interface IPropsButton {
  caseName: string;
}

const Button = ({ caseName }: IPropsButton) => {
  function getScriptIcon(caseName: string) {
    switch (caseName) {
      case 'wood':
        return <GiWoodPile />;
      case 'solar':
        return <GiSolarPower />;
      case 'wind':
        return <GiWindTurbine />;
      case 'termal':
        return <BsThermometerHalf />;
      case 'coal':
        return <GiCoalWagon />;
      case 'electra':
        return <GiLightningArc />;
      case 'gas':
        return <GiFuelTank />;
      case 'renew':
        return <img src={recyclePower} alt={''} className="img-recyclePower"></img>;
      case 'noSelect':
        return <p className='no-select'>Текущее состояние</p>;
      default:
    }
  }
  return <button className="button">{getScriptIcon(caseName)}</button>;
};
export default Button;
