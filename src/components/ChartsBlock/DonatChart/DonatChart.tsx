import './DonatChart.scss';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend);

interface IPropsDonatChart {
  powerCaseOut: {
    labels: ['черем. уголь', 'уголь', 'древесина', 'мазут', 'газ', 'эл/энергия', 'ВИЭ'];
    data: number[];
    color: ['#595959', '#b3b3b3', '#56db40', '#ffd21e', '#1e98ff', '#b51eff', '#ed4543'];
  };
}

const DonatChart = ({ powerCaseOut }: IPropsDonatChart) => {
  const data: any = {
    labels: powerCaseOut.labels,
    datasets: [
      {
        data: powerCaseOut.data,
        backgroundColor: powerCaseOut.color,
        label: '',
      },
    ],
  };

  const options: any = {
    maintainAspectRatio: false,

    plugins: {
      datalabels: {
        color: 'black',
        formatter: (value: number, context: any) => {
          if (value < 1) return null;
          return value;
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        usePointStyle: true,
        callbacks: {
          labelPointStyle: function () {
            return {
              pointStyle: 'rectRounded',
            };
          },
        },
      },
    },
  };

  return (
    <div className="donatChart">
      <Doughnut data={data} options={options} />
    </div>
  );
};
export default DonatChart;
