import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Chip
} from '@mui/material';
import { 
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  LocalHospital as CriticalIcon
} from '@mui/icons-material';

const HealthTips = ({ data }) => {
  // Calculate averages
  const metrics = {
    steps: data.reduce((sum, day) => sum + day.steps, 0) / data.length,
    heartRate: data.reduce((sum, day) => sum + day.heartRate, 0) / data.length,
    sleepHours: data.reduce((sum, day) => sum + parseFloat(day.sleepHours), 0) / data.length,
    spo2: data.reduce((sum, day) => sum + day.spo2, 0) / data.length,
    sleepQuality: data.reduce((sum, day) => sum + day.sleepQuality, 0) / data.length
  };

  // Generate comprehensive tips
  const generateTips = () => {
    const tips = [];
    
    // Activity tips
    if (metrics.steps < 5000) {
      tips.push({
        text: "Your step count is low. Aim for at least 5,000 steps daily to reduce health risks.",
        severity: "warning",
        icon: <WarningIcon color="warning" />
      });
    } else if (metrics.steps < 8000) {
      tips.push({
        text: "Good activity level! Reaching 8,000 steps daily provides additional cardiovascular benefits.",
        severity: "info",
        icon: <InfoIcon color="info" />
      });
    } else {
      tips.push({
        text: "Excellent activity level! Maintain this for optimal health benefits.",
        severity: "success",
        icon: <CheckCircleIcon color="success" />
      });
    }

    // Heart rate tips
    if (metrics.heartRate > 85) {
      tips.push({
        text: `Elevated resting heart rate (${metrics.heartRate.toFixed(0)} bpm). Consider stress reduction and cardiovascular exercise.`,
        severity: "warning",
        icon: <WarningIcon color="warning" />
      });
    } else if (metrics.heartRate < 60) {
      tips.push({
        text: `Low resting heart rate (${metrics.heartRate.toFixed(0)} bpm). Common in athletes but consult a doctor if experiencing dizziness.`,
        severity: "info",
        icon: <InfoIcon color="info" />
      });
    }

    // Sleep tips
    if (metrics.sleepHours < 6) {
      tips.push({
        text: `Insufficient sleep (${metrics.sleepHours.toFixed(1)} hours). Chronic sleep deprivation increases health risks.`,
        severity: "warning",
        icon: <WarningIcon color="warning" />
      });
    } else if (metrics.sleepHours > 9) {
      tips.push({
        text: `Excessive sleep duration (${metrics.sleepHours.toFixed(1)} hours). May indicate underlying health issues.`,
        severity: "info",
        icon: <InfoIcon color="info" />
      });
    }

    if (metrics.sleepQuality < 2) {
      tips.push({
        text: "Poor sleep quality detected. Improve sleep hygiene: dark room, consistent schedule, limit screens before bed.",
        severity: "warning",
        icon: <WarningIcon color="warning" />
      });
    }

    // SpO2 tips
    if (metrics.spo2 < 95) {
      tips.push({
        text: `Slightly low blood oxygen (${metrics.spo2.toFixed(0)}%). Normal range is 95-100%. Monitor if consistently below 94%.`,
        severity: "warning",
        icon: <WarningIcon color="warning" />
      });
    }
    if (metrics.spo2 < 92) {
      tips.push({
        text: `Concerning blood oxygen level (${metrics.spo2.toFixed(0)}%). Consult a healthcare professional.`,
        severity: "error",
        icon: <CriticalIcon color="error" />
      });
    }

    // General health tips
    tips.push({
      text: "Hydration tip: Drink at least 2 liters of water daily, more if physically active.",
      severity: "info",
      icon: <InfoIcon color="info" />
    });

    tips.push({
      text: "Nutrition tip: Include colorful vegetables in every meal for essential micronutrients.",
      severity: "info",
      icon: <InfoIcon color="info" />
    });

    tips.push({
      text: "Mental health: Practice mindfulness for 10 minutes daily to reduce stress.",
      severity: "info",
      icon: <InfoIcon color="info" />
    });

    return tips.sort((a, b) => {
      const severityOrder = { error: 0, warning: 1, info: 2, success: 3 };
      return severityOrder[a.severity] - severityOrder[b.severity];
    });
  };

  const tips = generateTips();

  return (
    <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h6" gutterBottom>
        Personalized Health Recommendations
        <Chip 
          label={`Based on ${data.length} days of data`} 
          size="small" 
          sx={{ ml: 2 }} 
        />
      </Typography>
      <List>
        {tips.map((tip, index) => (
          <ListItem key={index} sx={{ alignItems: 'flex-start' }}>
            <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>{tip.icon}</ListItemIcon>
            <ListItemText 
              primary={tip.text} 
              primaryTypographyProps={{ 
                color: tip.severity === 'error' ? 'error' : 'textPrimary',
                fontWeight: tip.severity === 'error' ? 'bold' : 'normal'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HealthTips;