import React from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({chartOut}) {
  const labels = chartOut.map((chosenScript) => chosenScript.localName);
  const coal = chartOut.map((chosenScript) => chosenScript.coal);
  const wood = chartOut.map((chosenScript) => chosenScript.wood);
  const oil = chartOut.map((chosenScript) => chosenScript.oil);
  const gas = chartOut.map((chosenScript) => chosenScript.gas);
  const electric = chartOut.map((chosenScript) => chosenScript.electric);

  ChartJS.defaults.font.family = 'PT Sans';
  ChartJS.defaults.font.size = 13;
  ChartJS.defaults.color = 'black';

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'уголь',
        backgroundColor: '#bfbfbf',
        data: coal,
      },
      {
        label: 'дрeвесина',
        backgroundColor: '#bcd89a',
        data: wood,
      },
      {
        label: 'мазут',
        backgroundColor: '#ccc1da',
        data: oil,
      },
      {
        label: 'газ',
        backgroundColor: '#e4dd88',
        data: gas,
      },
      {
        label: 'эл/энергия',
        backgroundColor: '#8eb4e3',
        data: electric,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    plugins: {
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
    responsive: true,
    scales: {
      x: {
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
    <>
      <Bar data={data} options={options} />
    </>
  );
}

export default BarChart;
