const weatherForecastCache = [];
const citiesChecked = [];

export function getWeatherForecastCache() {
  return weatherForecastCache;
}

export function updateWeatherForecastCache(pWeatherForecaseObject) {
  weatherForecastCache.push(pWeatherForecaseObject);
}

export function getCitiesChecked() {
  return citiesChecked;
}

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

export function isForcastForLocationAvailable(pWeatherForecastState, pLocationStr) {
  const forecastForLocation = pWeatherForecastState.find(
    function(pWeatherForecaseObject){
      return pWeatherForecaseObject.location === pLocationStr;
    }
  );
  return forecastForLocation ? true : false;
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
