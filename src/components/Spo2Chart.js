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

const Spo2Chart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [{
      label: 'SpO2',
      data: data.map(item => item.spo2),
      borderColor: '#00838f',
      backgroundColor: 'rgba(0, 131, 143, 0.1)',
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
        text: 'Blood Oxygen (SpO2)',
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
        min: 90,
        max: 100,
        ticks: { font: { size: 12 } },
        title: {
          display: true,
          text: '% SpO2',
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

export default Spo2Chart;