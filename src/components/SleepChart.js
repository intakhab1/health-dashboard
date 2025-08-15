import React from 'react';
import { Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SleepChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [{
      label: 'Sleep Hours',
      data: data.map(item => parseFloat(item.sleepHours)),
      backgroundColor: '#6a1b9a',
      borderRadius: 4,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Sleep Duration',
        font: { size: 16, weight: 'bold' }
      },
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 12 } }
      },
      y: {
        min: 4,
        max: 9,
        ticks: { font: { size: 12 } },
        title: {
          display: true,
          text: 'Hours',
          font: { size: 14 }
        }
      }
    }
  };

  return (
    <Box sx={{ height: '100%', minHeight: '300px' }}>
      <Bar options={options} data={chartData} />
    </Box>
  );
};

export default SleepChart;