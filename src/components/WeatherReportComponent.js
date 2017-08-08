import React, { Component } from 'react';

import { getForecastForLocation } from '../util/weather_forecast';
import { fetchWeatherForecastForLocation } from '../util/api_interaction';
import WeatherTileComponent from './WeatherTileComponent';

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
    pItem.forecast.forEach(function(pForecastForDay) {
      lForecastFor10Days.push(pForecastForDay);
    });
    lWeatherForecastObject = {
      location: pLocation,
      currentTemp: lTemp,
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
    const self = this;
    fetchWeatherForecastForLocation(lLocation).then(function(response) {
      let lFetchedWeatherForecast = [];
      let lWeatherForecastObject = self.constructWeatherForecastObject(lLocation, response.data.query.results.channel.item);
      lFetchedWeatherForecast.push(lWeatherForecastObject);
      self.updateWeatherForecastCache(lFetchedWeatherForecast);
    });
  }

  /**
   * When we recieve prop or when prop changes, we want to make fetch call again.
   * But let us make sure to check cache first to avoid extra call.
   * @param nextProps next set of props passed to component.
   */
  componentWillReceiveProps(nextProps) {
    const lLocation = nextProps.location;
    const self = this;
    fetchWeatherForecastForLocation(lLocation).then(function(response) {
      let lFetchedWeatherForecast = [];
      let lWeatherForecastObject = self.constructWeatherForecastObject(lLocation, response.data.query.results.channel.item);
      lFetchedWeatherForecast.push(lWeatherForecastObject);
      self.updateWeatherForecastCache(lFetchedWeatherForecast);
    });
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
              <WeatherTileComponent forecast={pForecastForDay} />
            </div>
          );
        })
      }
    }
    return <div>{lWeatherTiles}</div>;
  }

  /**
   * Simple render method to just render all the tiles for 10 day forecast.
   */
  render() {
    return this.renderWeatherTiles();
  }
}

export default WeatherReportComponent;
