import express from 'express';
import WeatherRecipesController from './controllers/weatherRecipesController';

const routes = express.Router();
const weaterController = new WeatherRecipesController();

routes.get('/weather/:city', weaterController.getWeatherRecipes);

export default routes;
