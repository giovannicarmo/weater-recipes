import { weatherApi, recipeApi } from '../services/api';
import ENDPOINTS from '../constants/endpoints';
import KEYS from '../constants/keys';

/**
 * Retorna a temperatura, nome, e país de uma cidade fornecida pela API http://api.openweathermap.org/.
 * @param city
 */
export const getWeather = (city: string): Promise<any> =>
  weatherApi
    .get(ENDPOINTS.WEATHER.GET(city, KEYS.WEATHER_API))
    .then((res) => {
      const {
        main: { temp },
        sys: { country },
        name,
      } = res.data;

      return { name, country, temp };
    })
    .catch((err) => err);

/**
 * Formata o JSON de receitas somente com os campos necessários.
 * @param arr
 */
const deserializeRecipes = (arr: []) =>
  arr.map((el: any) => {
    const { label, image, dietLabels, healthLabels, ingredientLines } = el.recipe;

    return { label, image, dietLabels, healthLabels, ingredientLines };
  });

/**
 * Retorna uma lista com as receitas fornecidas pela API https://api.edamam.com.
 * @param keyword
 */
export const getRecipies = (keyword: string): Promise<any> =>
  recipeApi
    .get(ENDPOINTS.RECIPES.GET(keyword, KEYS.RECIPES_API.ID, KEYS.RECIPES_API.KEY))
    .then((res) => {
      const { hits } = res.data;

      return deserializeRecipes(hits);
    })
    .catch((err) => err);

/**
 * Retorna um ingrediente base para as receitas de acordo com a temperatura fornecida.
 * @param temp
 */
export const getRecipeKeyword = (temp: number): string => {
  let ingredient = '';

  if (temp < 20) {
    ingredient = 'soup';
  } else if (temp >= 20 && temp < 30) {
    ingredient = 'meat';
  } else {
    ingredient = 'salad';
  }

  return ingredient;
};
