import Button from './Button';
import './SelectionPanel.scss';
import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCaseIndex } from '../../features/caseSlice/case';

const SelectionPanel = () => {
  const dispatch = useDispatch();
  const caseIndex = useSelector((state: RootState) => state.case.caseIndex);
  const handleOnClick = () => {
    dispatch(setCaseIndex(0));
  };

  return (
    <div className="selectionPanel">
      <h3>Энергетические ресурсы</h3>
      <Button
        caseName={'wood'}
        scriptDiscriptions={
          <div className="tippy-div">
            <h4>Производители древесного топлива</h4>
          </div>
        }
      />
      <Button
        caseName={'solar'}
        scriptDiscriptions={
          <div className="tippy-div">
            <h4>Показатели гелиопотенциала </h4>
          </div>
        }
      />
      <Button
        caseName={'wind'}
        scriptDiscriptions={
          <div className="tippy-div">
            <h4>Показатели ветропотенциала</h4>
          </div>
        }
      />
      <Button
        caseName={'termal'}
        scriptDiscriptions={
          <div className="tippy-div">
            <h4>Показатели геопотенциала</h4>
          </div>
        }
      />
      <div className="horizontal-border"></div>
      <button
        className={`no-select ${caseIndex === 0 && 'selected'} `}
        type="button"
        onClick={handleOnClick}
      >
        <h3>Текущее состояние</h3>
      </button>
      <div className="horizontal-border" style={{ marginRight: '5px' }}></div>
      <h3>Сценарий</h3>
      <Button
        caseName={'coal'}
        scriptDiscriptions={
          <div className="tippy-div">
            <h4>Угольный</h4>
            <p>
              Замещение черемховского угля в 31 котельной Слюдянского (9 шт.) и Кабанского (22 шт.)
              районов на экологически более благоприятный бурый уголь; <br />
              Увеличение расхода топлива с 26,3 до 28,4 тыс. т/год.
            </p>
          </div>
        }
      />
      <Button
        caseName={'electra'}
        scriptDiscriptions={
          <div className="tippy-div">
            <h4>Электрический</h4>
            <p>
              Использование электроэнергии на цели теплоснабжения: <br />- замещение угля в
              количестве 316,2 тыс. т и мазута 1,1 тыс. т на электроэнергию;
              <br />- существующие котельные на древесном и газовом топливе продолжают
              функционировать. Суммарная потребность в электроэнергии 969 млн кВт·ч/год.
            </p>
          </div>
        }
      />
      <Button
        caseName={'gas'}
        scriptDiscriptions={
          <div className="tippy-div">
            <h4>Газовый</h4>
            <p>
              - замещение угля в котельных на сжиженный и трубопроводный природный газ;
              <br />- существующие котельные на древесном топливе и электрокотельные продолжают
              функционировать. Суммарная потребность в природном газе 40 млн м3/год, в СПГ 55 тыс.
              т/год.
            </p>
          </div>
        }
      />
      <Button
        caseName={'renew'}
        scriptDiscriptions={
          <div className="tippy-div">
            <h4>Возобновляеммая энергетика</h4>
            <p>
              - сооружение гибридных солнечно-дизельных комплексов в 3 населенных пунктах;
              <br />- строительство малых ГЭС в 2 населенных пунктах;
              <br />- замена 6 угольных котельных на теплонасосные установки;
              <br />- замещение угля отходами деревообработки в 7 котельных и пеллетами в 1
              котельной. Вытеснение дизельного топлива 93 т/год. Дополнительная потребность в
              электроэнергии 0,9 млн кВт·ч/год, в отходах деревообработки 3,6 тыс. т/год, в пеллетах
              - 0,4 тыс. т/год.
            </p>
          </div>
        }
      />
    </div>
  );
};
export default SelectionPanel;
