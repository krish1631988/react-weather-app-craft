//const isomorphicFetch = require('isomorphic-fetch');
var Fetch = require('whatwg-fetch');

module.exports = {
  getWeatherForecastForLocation: function(pLocationStr) {
    const queryServiceUrl = "https://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + pLocationStr + "')&format=json";

    return fetch(queryServiceUrl).then(function(response) {
      return response.json();
    });
  }
};
