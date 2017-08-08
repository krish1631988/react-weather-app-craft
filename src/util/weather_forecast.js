/**
 * Method to get the weather forecast object for a location from cache.
 * @param pWeatherForecastCache WeatherForecast cache..
 * @param pLocation Location string.
 * @return lForecastForLocation Forecast object for given location.
 */
export function getForecastForLocation(pWeatherForecastCache, pLocation) {
  const lForecastForLocation = pWeatherForecastCache.find(
    function(pWeatherForecaseObject){
      return pWeatherForecaseObject.location === pLocation;
    }
  );
  return lForecastForLocation;
}

/**
 * Verification method to check if weather forecast for a location exists
 * in cache.
 * @param pWeatherForecastCache cache of forecasts.
 * @param pLocation location string.
 * @return boolean True if forecast exists.
 */
export function isForcastForLocationAvailable(pWeatherForecastCache, pLocation) {
  const lForecastForLocation = pWeatherForecastCache.find(
    function(pWeatherForcastObject){
      return pWeatherForcastObject.location === pLocation;
    }
  );
  return lForecastForLocation ? true : false;
}

/**
 * Method to get the forecast for a given date based on certain location.
 * We first get the weather forcast object matching the location and then
 * we try to fetch the forecast object matching a particular date.
 * @param pForecastForLocation WeatherForecastObject for the location.
 * @param pDate Date string passed.
 * @return lForecastForDay forecast object representing the given date.
 */
export function getForecastForDay(pForecastForLocation, pDate) {
  const lForecastForDay = pForecastForLocation.forecast.find(
    function(pForecastObject){
      return pForecastObject.date === pDate;
    }
  );
  return lForecastForDay;
}
