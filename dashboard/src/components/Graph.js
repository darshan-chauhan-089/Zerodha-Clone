import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,

  ArcElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,

  ArcElement,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Trading Bar Chart',
    },
  },
};




export function VerticalGraph({data, options}) {
  return <Bar options={options} data={data}/>;
}


export function DoughnutGraph({data}) {
  return <Doughnut data={data} />;
}
