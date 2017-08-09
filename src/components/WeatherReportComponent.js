import React, { Component } from 'react';

import { getForecastForLocation, isForcastForLocationAvailable } from '../util/weather_forecast';
import { fetchWeatherForecastForLocation } from '../util/api_interaction';
import { isTodaysDate } from '../util/date_utils';
import WeatherTileComponent from './WeatherTileComponent';

import '../style/WeatherReportComponent.css';

class WeatherReportComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherForecastCache: []
    };
  }

  /**
   * Method to construct the forecast object which would be consisting of
   * 10 day forecast along with location and current temp.
   * @param pLocation Location string.
   * @param pItem Query Item from response.
   * @return lWeatherForecastObject Weather forcast object for given location.
   */
  constructWeatherForecastObject(pLocation, pItem) {
    let lWeatherForecastObject;
    let lForecastFor10Days = [];
    const lTemp = pItem.condition.temp;
    const lTempCode = pItem.condition.code;
    const lTempDesc = pItem.condition.text;
    pItem.forecast.forEach(function(pForecastForDay) {
      lForecastFor10Days.push(pForecastForDay);
    });
    lWeatherForecastObject = {
      location: pLocation,
      currentTemp: lTemp,
      currentTempCode: lTempCode,
      currentTempDescription: lTempDesc,
      forecast: lForecastFor10Days
    };

    return lWeatherForecastObject;
  }

  /**
   * Method to update the cache for weather forecast under state.
   * @param pWeatherForecastCache Cache of forecasts for different locations.
   */
  updateWeatherForecastCache(pWeatherForecastCache) {
    this.setState({
      weatherForecastCache: pWeatherForecastCache
    });
  }

  /**
   * When component mounts, we want to make fetch call again.
   * But let us make sure to check cache first to avoid extra call.
   */
  componentDidMount() {
    const lLocation = this.props.location;
    if (!isForcastForLocationAvailable(this.state.weatherForecastCache, lLocation)) {
      const self = this;
      fetchWeatherForecastForLocation(lLocation).then(function(data) {
        let lFetchedWeatherForecast = self.state.weatherForecastCache;
        let lWeatherForecastObject = self.constructWeatherForecastObject(lLocation, data.query.results.channel.item);
        lFetchedWeatherForecast.push(lWeatherForecastObject);
        self.updateWeatherForecastCache(lFetchedWeatherForecast);
      });
    }

    // Let us clear cache after some time duration so as we get updated data.
    // Note that, as the state gets updated, component would render and again
    // componentDidMount would get called.
    const self = this;
    setInterval(function() {
      self.setState({
        weatherForecastCache: []
      });
      fetchWeatherForecastForLocation(lLocation).then(function(data) {
        let lFetchedWeatherForecast = self.state.weatherForecastCache;
        let lWeatherForecastObject = self.constructWeatherForecastObject(lLocation, data.query.results.channel.item);
        lFetchedWeatherForecast.push(lWeatherForecastObject);
        self.updateWeatherForecastCache(lFetchedWeatherForecast);
      });
    }, (1000*60*5));
  }

  /**
   * When we recieve prop or when prop changes, we want to make fetch call again.
   * But let us make sure to check cache first to avoid extra call.
   * @param nextProps next set of props passed to component.
   */
  componentWillReceiveProps(nextProps) {
    const lLocation = nextProps.location;
    if (!isForcastForLocationAvailable(this.state.weatherForecastCache, lLocation)) {
      const self = this;
      fetchWeatherForecastForLocation(lLocation).then(function(data) {
        let lFetchedWeatherForecast = self.state.weatherForecastCache;
        let lWeatherForecastObject = self.constructWeatherForecastObject(lLocation, data.query.results.channel.item);
        lFetchedWeatherForecast.push(lWeatherForecastObject);
        self.updateWeatherForecastCache(lFetchedWeatherForecast);
      });
    }
  }

  /**
   * Actual render method to render weather tiles. Before we render, we would
   * read the weather forcast details from our cache maintained under state.
   */
  renderWeatherTiles() {
    const lLocation = this.props.location;
    const lWeatherForecastCache = this.state.weatherForecastCache;
    let lForecastForLocation;
    let lForecastFor10Days = [];
    let lWeatherTiles;

    // Let us make sure we do have data as we proceed.
    if(lWeatherForecastCache.length > 0) {
      lForecastForLocation = getForecastForLocation(lWeatherForecastCache, lLocation);

      // To avoid race condition let us be certain we do have forecastForLocation.
      if (lForecastForLocation) {
        lForecastFor10Days = lForecastForLocation.forecast;

        // Let us iterate and map the forecast details to create tiles.
        lWeatherTiles = lForecastFor10Days.map(function(pForecastForDay){
          return (
            <div key={pForecastForDay.date}>
              <WeatherTileComponent
                currentTemp = { isTodaysDate(pForecastForDay.date) ? lForecastForLocation.currentTemp : null }
                currentTempCode = { isTodaysDate(pForecastForDay.date) ? lForecastForLocation.currentTempCode : null }
                currentTempDescription = { isTodaysDate(pForecastForDay.date) ? lForecastForLocation.currentTempDescription : null }
                forecast={pForecastForDay}
              />
            </div>
          );
        })
      }
    }
    return <div className = "weather-report">{lWeatherTiles}</div>;
  }

  /**
   * Simple render method to just render all the tiles for 10 day forecast.
   */
  render() {
    return this.renderWeatherTiles();
  }
}

export default WeatherReportComponent;
