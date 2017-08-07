export const weatherForecast = [
  {
    location: 'sunnyvale, ca',
    forecast: [
      {
        high: '74',
        low: '56',
        descriptionText: 'Cloudy',
        currentTemp: '57',
        date: '06 Aug 2017'
      },
      {
        high: '82',
        low: '68',
        descriptionText: 'Sunny',
        currentTemp: '50',
        date: '07 Aug 2017'
      }
    ]
  },
  {
    location: 'fremont, ca',
    forecast: [
      {
        high: '84',
        low: '66',
        descriptionText: 'Sunny',
        currentTemp: '60',
        date: '06 Aug 2017'
      },
      {
        high: '68',
        low: '50',
        descriptionText: 'Rainy',
        currentTemp: '45',
        date: '07 Aug 2017'
      }
    ]
  }
];

/**
 * Method to get the weather forecast object
 * @param pForecastForLocation WeatherForecastObject for the location.
 * @param pDateStr Date string passed.
 * @return forecastForDay forecast object representing the given date.
 */
export function getForecastForLocation(pWeatherForecastState, pLocationStr) {
  const forecastForLocation = pWeatherForecastState.find(
    function(pWeatherForecaseObject){
      return pWeatherForecaseObject.location === pLocationStr;
    }
  );
  return forecastForLocation;
}

/**
 * Method to get the forecast for a given date based on certain location.
 * We first get the weather forcast object matching the location and then
 * we try to fetch the forecast object matching a particular date.
 * @param pForecastForLocation WeatherForecastObject for the location.
 * @param pDateStr Date string passed.
 * @return forecastForDay forecast object representing the given date.
 */
export function getForecastForDay(pForecastForLocation, pDateStr) {
  const forecastForDay = pForecastForLocation.forecast.find(
    function(pForecastObject){
      return pForecastObject.date === pDateStr;
    }
  );
  return forecastForDay;
}
