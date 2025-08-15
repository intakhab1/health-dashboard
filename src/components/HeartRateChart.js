import React from 'react';
import { Box } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HeartRateChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [{
      label: 'Heart Rate',
      data: data.map(item => item.heartRate),
      borderColor: '#dc004e',
      backgroundColor: 'rgba(220, 0, 78, 0.1)',
      borderWidth: 2,
      tension: 0.3,
      fill: true,
      pointRadius: 3,
      pointHoverRadius: 5
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Heart Rate (BPM)',
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
        min: 50,
        max: 100,
        ticks: { font: { size: 12 } },
        title: {
          display: true,
          text: 'BPM',
          font: { size: 14 }
        }
      }
    }
  };

  return (
    <Box sx={{ height: '100%', minHeight: '300px' }}>
      <Line options={options} data={chartData} />
    </Box>
  );
};

export default HeartRateChart;