import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

 export const ScoreChart = ({ score, total }) => {
  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [score, total - score],
        backgroundColor: ['#008000', '#FFFFFF'],
        hoverBackgroundColor: ['#006400', '#cd5c5c']
      }
    ]
  };

  return (
    <div className="score-chart">
      <Doughnut data={data} />
    </div>
  );
};

