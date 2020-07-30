const ENDPOINTS = {
  WEATHER: {
    BASE_URL: 'http://api.openweathermap.org',
    GET_BY_CITY: (city: string, appId: string) => `data/2.5/weather?q=${city}&APPID=${appId}`,
  },
};

export default ENDPOINTS;
