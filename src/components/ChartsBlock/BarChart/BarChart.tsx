import './BarChart.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IPropsBarChart {
  amountCaseOut: {
    id: number;
    localName: string;
    cherem_coal: number;
    coal: number;
    wood: number;
    oil: number;
    gas: number;
    electric: number;
  }[];
}

ChartJS.defaults.font.family = 'Roboto';
ChartJS.defaults.font.size = 14;
ChartJS.defaults.color = 'black';

const BarChart = ({ amountCaseOut }: IPropsBarChart) => {
  const labels = amountCaseOut.map((chosenScript) => chosenScript.localName);
  const cheremCoal = amountCaseOut.map((chosenScript) => chosenScript.cherem_coal);
  const coal = amountCaseOut.map((chosenScript) => chosenScript.coal);
  const wood = amountCaseOut.map((chosenScript) => chosenScript.wood);
  const oil = amountCaseOut.map((chosenScript) => chosenScript.oil);
  const gas = amountCaseOut.map((chosenScript) => chosenScript.gas);
  const electric = amountCaseOut.map((chosenScript) => chosenScript.electric);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'черемховский уголь',
        backgroundColor: '#595959',
        data: cheremCoal,
      },
      {
        label: 'уголь',
        backgroundColor: '#b3b3b3',
        data: coal,
      },
      {
        label: 'дрeвесина',
        backgroundColor: '#56db40',
        data: wood,
      },
      {
        label: 'мазут',
        backgroundColor: '#ffd21e',
        data: oil,
      },
      {
        label: 'газ',
        backgroundColor: '#1e98ff',
        data: gas,
      },
      {
        label: 'эл/энергия',
        backgroundColor: '#b51eff',
        data: electric,
      },
    ],
  };

  const options: any = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    layout: {
      padding: 0,
      margin: 0,
    },
    plugins: {
      datalabels: false,
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
    scales: {
      x: {
        max: 30,
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
  };

  return (
    <div className="barChart">
      <Bar data={data} options={options} />
    </div>
  );
};
export default BarChart;
