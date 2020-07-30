import axios from 'axios';
import ENDPOINTS from '../constants/endpoints';

export const weatherApi = axios.create({
  baseURL: ENDPOINTS.WEATHER.BASE_URL,
});
