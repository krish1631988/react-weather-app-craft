import axios from 'axios';

/**
 * Method to just construct and return the queryURL to be used
 * for making service call.
 * @param pLocation Location string.
 * @return queryURL URL string.
 */
function getQueryURL(pLocation) {
  const lQueryURL = "https://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + pLocation + "')&format=json";
  return lQueryURL;
}

/**
 * Method that would make service call using axios library.
 * @param pLocation Location string.
 * @return ES6 promise constaining the response json.
 */
export function fetchWeatherForecastForLocation(pLocation) {
  return axios.get(getQueryURL(pLocation));
}
