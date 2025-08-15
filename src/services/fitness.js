import axios from 'axios';

export const fetchFitnessData = async (accessToken) => {
  const now = new Date();
  const startTime = new Date(now.setDate(now.getDate() - 30)).toISOString();
  const endTime = new Date().toISOString();

  try {
    const response = await axios.post(
      'https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate',
      {
        aggregateBy: [
          {
            dataTypeName: 'com.google.step_count.delta',
            dataSourceId: 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps',
          },
          {
            dataTypeName: 'com.google.heart_rate.bpm',
            dataSourceId: 'derived:com.google.heart_rate.bpm:com.google.android.gms:merge_heart_rate_bpm',
          },
        ],
        bucketByTime: { durationMillis: 86400000 }, // 1 day
        startTimeMillis: new Date(startTime).getTime(),
        endTimeMillis: new Date(endTime).getTime(),
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching fitness data:', error);
    throw error;
  }
};