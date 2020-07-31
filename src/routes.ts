import express from 'express';
import WeatherRecipesController from './controllers/weatherRecipesController';
import createLimiter from './services/limiter';

const routes = express.Router();
const weaterController = new WeatherRecipesController();
const limiter = createLimiter(1, 5);

routes.get('/weather/:city', limiter, weaterController.getWeatherRecipes);

export default routes;
