import Button from './Button';
import './SelectionPanel.scss';
import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCaseIndex } from '../../features/caseSlice/case';

const SelectionPanel = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(setCaseIndex(0));
  };

  return (
    <div className="selectionPanel">
      <h3>Энергетические ресурсы</h3>
      <Button caseName={'wood'} />
      <Button caseName={'solar'} />
      <Button caseName={'wind'} />
      <Button caseName={'termal'} />
      <div className="horizontal-border"></div>
      <button className="no-select" type="button" onClick={handleOnClick}>
        <h3>Текущее состояние</h3>
      </button>
      <div className="horizontal-border" style={{ marginRight: '5px' }}></div>
      <h3>Сценарий</h3>
      <Button caseName={'coal'} />
      <Button caseName={'electra'} />
      <Button caseName={'gas'} />
      <Button caseName={'renew'} />
    </div>
  );
};
export default SelectionPanel;
