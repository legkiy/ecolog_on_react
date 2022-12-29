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
  caseOut: {
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

const BarChart = ({ caseOut }: IPropsBarChart) => {
  const labels = caseOut.map((chosenScript) => chosenScript.localName);
  const cheremCoal = caseOut.map((chosenScript) => chosenScript.cherem_coal);
  const coal = caseOut.map((chosenScript) => chosenScript.coal);
  const wood = caseOut.map((chosenScript) => chosenScript.wood);
  const oil = caseOut.map((chosenScript) => chosenScript.oil);
  const gas = caseOut.map((chosenScript) => chosenScript.gas);
  const electric = caseOut.map((chosenScript) => chosenScript.electric);

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
    responsive: true,
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
    // responsive: true,
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
