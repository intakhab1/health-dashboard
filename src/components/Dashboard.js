import React from 'react';
import { Grid, Paper } from '@mui/material';
import ActivityChart from './ActivityChart';
import HeartRateChart from './HeartRateChart';
import SleepChart from './SleepChart';
import Spo2Chart from './Spo2Chart';
import HealthTips from './HealthTips';

const generateMockData = (days = 30) => {
  const data = [];
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    data.push({
      date: date.toLocaleDateString(),
      steps: Math.floor(Math.random() * 5000) + 3000,
      heartRate: Math.floor(Math.random() * 30) + 60,
      sleepHours: (Math.random() * 3 + 5).toFixed(1),
      spo2: Math.floor(Math.random() * 5) + 95,
      sleepQuality: Math.floor(Math.random() * 3) + 1,
    });
  }
  
  return data;
};

const Dashboard = () => {
  const mockData = generateMockData();

  return (
    <Grid container spacing={3} sx={{ height: '100vh', p: 2 }}>
      {/* Left Side - Health Metrics Cards */}
      <Grid item xs={12} md={8}>
        <Grid container spacing={3} sx={{ height: '100%' }}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
              <ActivityChart data={mockData} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
              <HeartRateChart data={mockData} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
              <SleepChart data={mockData} />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} sx={{ height: '100%', p: 2 }}>
              <Spo2Chart data={mockData} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      {/* Right Side - Recommendations */}
      <Grid item xs={12} md={4}>
        <Paper elevation={3} sx={{ height: '100%', p: 2, overflow: 'auto' }}>
          <HealthTips data={mockData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;