import './MapDiscription.scss';
import { RootState } from '../../../app/store';
import { useSelector } from 'react-redux';

interface IPropsMapDiscription {
  caseIndex: number;
}

const MapDiscription = ({}: IPropsMapDiscription) => {
  const caseIndex = useSelector((state: RootState) => state.case.caseIndex);

  return (
    <div className="mapDiscription">
      {caseIndex === 6 ? (
        <ul>
          <li>
            BHI &mdash; прямая солнечная радиация на горизонтальную поверхность, кВ*ч/м<sup>2</sup>
            /год;
          </li>
          <li>
            DHI &mdash; рассеянная солнечная радиация на горизонтальную поверхность, кВ*ч/м
            <sup>2</sup>/год;
          </li>
          <li>
            GHI &mdash; суммарная солнечная радиация на горизонтальную поверхность, кВ*ч/м
            <sup>2</sup>/год;
          </li>
        </ul>
      ) : caseIndex === 7 ? (
        <ul>
          <li>WS &mdash; скорость ветра, м/с</li>
        </ul>
      ) : caseIndex === 8 ? (
        <ul>
          <li>По каждой высоте температура указана в &deg;C</li>
          <li>h &mdash; глубина измерения температуры</li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};
export default MapDiscription;
