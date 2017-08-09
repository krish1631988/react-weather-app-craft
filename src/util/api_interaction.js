import 'whatwg-fetch';

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
 * Method that would make service call using fetch API.
 * NOTE: We are using 'whatwg-fetch' which is basically a window.fetch polyfill.
 * @param pLocation Location string.
 * @return ES6 promise constaining the response json.
 */
export function fetchWeatherForecastForLocation(pLocation) {
  return fetch(getQueryURL(pLocation)).then(function(response) {
    return response.json();
  });
}
