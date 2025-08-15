import React from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Dashboard />
      </Box>
    </Box>
  );
};

export default Home;