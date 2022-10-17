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

function BarChart({ chartOut }) {
  const labels = chartOut.map((chosenScript) => chosenScript.localName);
  const cheremCoal = chartOut.map((chosenScript) => chosenScript.cherem_coal);
  const coal = chartOut.map((chosenScript) => chosenScript.coal);
  const wood = chartOut.map((chosenScript) => chosenScript.wood);
  const oil = chartOut.map((chosenScript) => chosenScript.oil);
  const gas = chartOut.map((chosenScript) => chosenScript.gas);
  const electric = chartOut.map((chosenScript) => chosenScript.electric);

  ChartJS.defaults.font.family = 'PT Sans';
  ChartJS.defaults.font.size = 14;
  ChartJS.defaults.color = 'black';

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'черемховский уголь',
        backgroundColor: '#808080',
        data: cheremCoal,
      },
      {
        label: 'уголь',
        backgroundColor: '#bfbfbf',
        data: coal,
      },
      {
        label: 'дрeвесина',
        backgroundColor: '#74c460',
        data: wood,
      },
      {
        label: 'мазут',
        backgroundColor: '#b074ff',
        data: oil,
      },
      {
        label: 'газ',
        backgroundColor: '#d6ce5a',
        data: gas,
      },
      {
        label: 'эл/энергия',
        backgroundColor: '#8bbfff',
        data: electric,
      },
    ],
  };

  const options = {
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
