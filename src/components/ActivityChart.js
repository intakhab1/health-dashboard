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

const ActivityChart = ({ data }) => {
  const chartData = {
    labels: data.slice(0, 7).map(item => item.date),
    datasets: [{
      label: 'Steps',
      data: data.slice(0, 7).map(item => item.steps),
      backgroundColor: '#1976d2',
      borderRadius: 4,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Weekly Step Count',
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
        min: 0,
        ticks: { font: { size: 12 } },
        title: {
          display: true,
          text: 'Steps',
          font: { size: 14 }
        }
      }
    }
  };

  return (
    <Box sx={{ height: '100%', width: '100%', position: 'relative' }}>
      <Bar options={options} data={chartData} />
    </Box>
  );
};

export default ActivityChart;