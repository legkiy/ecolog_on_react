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
            <div className="table-legend-box">
              <ul className="table-legend">
                <li className="ico-table-legend">&mdash;текущее состояние;</li>
                <li className="ico-table-legend">&mdash;улучшение;</li>
                <li className="ico-table-legend">&mdash;ухудшение;</li>
                <li className="ico-table-legend">&mdash;не изменилось.</li>
              </ul>
            </div>
            <div className="footnote">
              <ul>
                <li>
                  <i>
                    SO<sub>2</sub>
                  </i>{' '}
                  &mdash; диоксид серы
                </li>
                <li>
                  <i>
                    NO<sub>x</sub>
                  </i>
                  &mdash; оксиды азота
                </li>
                <li>
                  <i>
                    CO<sub>2</sub>
                  </i>{' '}
                  &mdash; диоксид углерода
                </li>
                <li>ЗШО &mdash; золошлаковые отходы</li>
              </ul>
            </div>
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
