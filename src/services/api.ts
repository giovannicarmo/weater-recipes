import axios from 'axios';
import ENDPOINTS from '../constants/endpoints';

export const weatherApi = axios.create({
  baseURL: ENDPOINTS.WEATHER.BASE_URL,
});

export const recipeApi = axios.create({
  baseURL: ENDPOINTS.RECIPES.BASE_URL,
});
