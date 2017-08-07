import React, { Component } from 'react';
import { getForecastForLocation } from '../util/weather_forecast';
import { dummyWeatherForecast } from '../util/dummy_weather_data';

import WeatherTileComponent from './WeatherTileComponent';

class WeatherReportComponent extends Component {
  constructor(props) {
    super(props);
    const location = this.props.location;
    const forecastForLocation = getForecastForLocation(dummyWeatherForecast, location);
    const currentWeatherForecast = [];
    currentWeatherForecast.push(forecastForLocation);
    this.state = {
      weatherForecast: currentWeatherForecast
    };
  }

  componentWillReceiveProps(nextProps) {
    const location = nextProps.location;
    const forecastForLocation = getForecastForLocation(dummyWeatherForecast, location);
    const currentWeatherForecast = this.state.weatherForecast;
    currentWeatherForecast.push(forecastForLocation);
    this.setState({
      weatherForecast: currentWeatherForecast
    });
  }

  render() {
    const locationStr = this.props.location;
    const weatherForecast = this.state.weatherForecast;
    const forecastForLocation = getForecastForLocation(weatherForecast, locationStr);
    const forecastFor10Days = forecastForLocation.forecast;
    const weatherTiles = forecastFor10Days.map(function(forecastForDay){
      return (
        <div key={forecastForDay.date}>
          <WeatherTileComponent forecast={forecastForDay} />
        </div>
      );
    })

    return <div>{weatherTiles}</div>;
  }
}

export default WeatherReportComponent;
