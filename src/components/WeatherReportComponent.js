import React, { Component } from 'react';
import { getForecastForLocation } from '../util/weather_forecast';

import WeatherTileComponent from './WeatherTileComponent';

class WeatherReportComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherForecast: [
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
              high: '94',
              low: '68',
              descriptionText: 'Sunny',
              currentTemp: '67',
              date: '06 Aug 2017'
            },
            {
              high: '56',
              low: '50',
              descriptionText: 'Rainy',
              currentTemp: '51',
              date: '07 Aug 2017'
            }
          ]
        }
      ]
    };
  }

  updateWeatherForecastData(pLocation) {
    const weatherForecast = this.state.weatherForecast;
    const forecastForLocation = {
      location: pLocation,
      forecast: [
        {
          high: '94',
          low: '68',
          descriptionText: 'Sunny',
          currentTemp: '67',
          date: '06 Aug 2017'
        },
        {
          high: '56',
          low: '50',
          descriptionText: 'Rainy',
          currentTemp: '51',
          date: '07 Aug 2017'
        }
      ]
    };
    weatherForecast.push(forecastForLocation)
    this.setState({weatherForecast: weatherForecast});
  }

  componentWillMount() {
    // const location = this.props.location;
    // if (location === 'fremont, ca') {
    //   this.updateWeatherForecastData(location);
    // }
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
