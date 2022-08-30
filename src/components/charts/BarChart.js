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
import curAmountIrk from './data/curAmountIrk.json';
import script1Amount from './data/script1Amount.json';
import script2Amount from './data/script2Amount.json';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = curAmountIrk.map((curAmountIrk) => curAmountIrk.localName);
const coal = curAmountIrk.map((curAmountIrk) => curAmountIrk.coal);
const wood = curAmountIrk.map((curAmountIrk) => curAmountIrk.wood);
const oil = curAmountIrk.map((curAmountIrk) => curAmountIrk.oil);
const gas = curAmountIrk.map((curAmountIrk) => curAmountIrk.gas);
const electric = curAmountIrk.map((curAmountIrk) => curAmountIrk.electric);

ChartJS.defaults.font.family = 'PT Sans';
ChartJS.defaults.font.size = 12;

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
  layout: {
    padding: 0,
  },
  plugins: {
    tooltip: {
      yAxlign: 'bottom',
      usePointStyle: true,
      // backgroundColor: 'rgba(255,255,255,0.9)',
      // titleColor: 'rgb(0,0,0)',
      // bodyColor: 'rgb(0,0,0)',
      callbacks: {
        labelPointStyle: function (context) {
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
    },
    y: {
      beginAtZero: true,
      stacked: true,
    },
  },
};

function BarChart(props) {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
