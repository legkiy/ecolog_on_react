import './DynamicContent.scss';
import ChartsBlock from '../ChartsBlock';
import Table from '../Table';
import YandexMap from '../YandexMap';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import OnlyMap from '../OnlyMap';

const DynamicContent = () => {
  const caseIndex = useSelector((state: RootState) => state.case.caseIndex);

  if (caseIndex < 5) {
    return (
      <div className="dynamicContent">
        <div className="left-block">
          <ChartsBlock />
          <div className="table-box">
            <Table />
          </div>
        </div>
        <div className="right-block">
          <YandexMap />
        </div>
      </div>
    );
  }
  return <OnlyMap />;
};
export default DynamicContent;
