import { Request, Response } from 'express';
import { getWeather, getRecipies, getRecipeKeyword } from '../functions/utils';

class WeatherRecipesController {
  public async getWeatherRecipes(request: Request, response: Response): Promise<Response> {
    const { city } = request.params;

    let stausCode = 400;
    let body = {};

    try {
      const weather = await getWeather(city);

      if (weather.temp) {
        const keyword = getRecipeKeyword(weather.temp);
        const recipes = await getRecipies(keyword);

        stausCode = 200;
        body = { weather, recipes };
      } else {
        body = 'Enter a valid city.';
      }
    } catch (error) {
      throw new Error(error);
    }

    return response.status(stausCode).json(body);
  }
}

export default WeatherRecipesController;
