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
import { RootState } from '../../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCaseIndex } from '../../../features/caseSlice/case';

interface IPropsButton {
  caseName: string;
}

const Button = ({ caseName }: IPropsButton) => {
  const dispatch = useDispatch();
  const caseIndex = useSelector((state: RootState) => state.case.caseIndex);

  const SCRIPT_MAP: any = {
    noSelect: 0,
    coal: 1,
    electra: 2,
    gas: 3,
    renew: 4,
    wood: 5,
    solar: 6,
    wind: 7,
    termal: 8,
  };

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
      default:
    }
  }

  const handleOnClick = () => {
    dispatch(setCaseIndex(SCRIPT_MAP[caseName]));
  };

  return (
    <button className="button" type="button" onClick={handleOnClick}>
      {getScriptIcon(caseName)}
    </button>
  );
};
export default Button;
