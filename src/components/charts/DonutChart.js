import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export default function DonutChart(props) {
  const data = {
    labels: props.chartOut.labels,
    datasets: [
      { data: props.chartOut.data, backgroundColor: props.chartOut.color },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Doughnut data={data} options={options}/>;
}
