const ENDPOINTS = {
  WEATHER: {
    BASE_URL: 'http://api.openweathermap.org',
    GET: (city: string, appId: string) => `data/2.5/weather?q=${city}&units=metric&APPID=${appId}`,
  },
  RECIPES: {
    BASE_URL: 'https://api.edamam.com',
    GET: (keyword: string, appId: string, appKey: String) =>
      `search?q=${keyword}&to=6&app_id=${appId}&app_key=${appKey}`,
  },
};

export default ENDPOINTS;
