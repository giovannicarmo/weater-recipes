import express from 'express';
import WeatherController from './controllers/weatherController';

const routes = express.Router();
const weaterController = new WeatherController();

routes.get('/weather/:city', weaterController.getByCity);

export default routes;
