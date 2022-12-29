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
      <Button caseName={'noSelect'} />
      <Button caseName={'coal'} />
      <Button caseName={'electra'} />
      <Button caseName={'gas'} />
      <Button caseName={'renew'} />
    </div>
  );
};
export default SelectionPanel;
