import Button from './Button';
import './SelectionPanel.scss';

const SelectionPanel = () => {
  return (
    <div className="selectionPanel">
      <h3>Энергетические ресурсы</h3>
      <Button caseName={'wood'} />
      <Button caseName={'solar'} />
      <Button caseName={'wind'} />
      <Button caseName={'termal'} />
      <button className="no-select" type="button">
        <h3>Текущее состояние</h3>
      </button>
      <h3>Сценарии</h3>
      <Button caseName={'coal'} />
      <Button caseName={'electra'} />
      <Button caseName={'gas'} />
      <Button caseName={'renew'} />
    </div>
  );
};
export default SelectionPanel;
