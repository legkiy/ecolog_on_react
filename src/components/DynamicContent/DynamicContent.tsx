import ChartsBlock from '../ChartsBlock';
import Table from '../Table';
import YandexMap from '../YandexMap';
import './DynamicContent.scss';

const DynamicContent = () => {
  return (
    <div className="dynamicContent">
      <div className="left-block">
        <ChartsBlock />
        <Table />
      </div>
      <div className="right-block">
        <YandexMap />
      </div>
    </div>
  );
};
export default DynamicContent;
