import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function DonutChart({chartOut}) {
  Chart.register(ArcElement, Tooltip, Legend);

  // Chart.register(ChartDataLabels); //добавление подписей внутрь графиков

  const data = {
    labels: chartOut.labels,
    datasets: [
      {
        data: chartOut.data,
        backgroundColor: chartOut.color,
        label: 132312,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,

    plugins: {
      datalabels: {
        color: 'black',
        formatter: (value, context) => {
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
  return <Doughnut data={data} options={options} />;
}
