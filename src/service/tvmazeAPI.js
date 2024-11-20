import axios from 'axios';

const BASE_URL = 'http://api.tvmaze.com';

export const fetchSchedule = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/schedule?country=US`);
    return response.data;
  } catch (error) {
    console.error('Error fetching TV schedule:', error);
    throw error;
  }
};
