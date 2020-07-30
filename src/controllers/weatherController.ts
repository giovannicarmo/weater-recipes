import { weatherApi } from '../services/api';
import { Request, Response } from 'express';
import ENDPOINTS from '../constants/endpoints';
import KEYS from '../constants/keys';

class WeatherController {
  public async getByCity(request: Request, response: Response) {
    const { city } = request.params;

    const serializeditems = await weatherApi
      .get(ENDPOINTS.WEATHER.GET_BY_CITY(city, KEYS.WEATHER_API))
      .then((res) => {
        const {
          main: { temp },
          sys: { country },
          name,
        } = res.data;

        return { main: { temp }, sys: { country }, name };
      })
      .catch((err) => err);

    return response.json(serializeditems);
  }
}

export default WeatherController;
