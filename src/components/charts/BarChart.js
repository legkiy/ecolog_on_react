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
import curAmount from './data/curAmount.json';
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

const labels = curAmount.map((curAmount) => curAmount.localName);
const coal = curAmount.map((curAmount) => curAmount.coal);
const wood = curAmount.map((curAmount) => curAmount.wood);
const oil = curAmount.map((curAmount) => curAmount.oil);
const gas = curAmount.map((curAmount) => curAmount.gas);
const electric = curAmount.map((curAmount) => curAmount.electric);

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

function BarChart(props) {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
}

export default BarChart;
