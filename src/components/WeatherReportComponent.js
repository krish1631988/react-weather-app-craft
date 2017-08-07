import React, { Component } from 'react';
import { getForecastForLocation } from '../util/weather_forecast';
//import { dummyWeatherForecast } from '../util/dummy_weather_data';
import axios from 'axios';

import WeatherTileComponent from './WeatherTileComponent';

class WeatherReportComponent extends Component {
  constructor(props) {
    super(props);
    // const location = this.props.location;
    // const forecastForLocation = getForecastForLocation(dummyWeatherForecast, location);
    // const currentWeatherForecast = [];
    // currentWeatherForecast.push(forecastForLocation);
    this.state = {
      weatherForecast: []
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   const location = nextProps.location;
  //   const forecastForLocation = getForecastForLocation(dummyWeatherForecast, location);
  //   const currentWeatherForecast = this.state.weatherForecast;
  //   currentWeatherForecast.push(forecastForLocation);
  //   this.setState({
  //     weatherForecast: currentWeatherForecast
  //   });
  // }

  componentDidMount() {
    const locationStr = this.props.location;
    const url = `https://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='${this.props.location}')&format=json`;
    const self = this;
    axios.get(url).then(function(response) {
      const temp = response.data.query.results.channel.item.condition.temp;
      let fetchedWeatherForecast = [];
      let weatherForecastObj;
      let forecastFor10Days = [];
      let forecastForDay;
      for(var i=0; i<response.data.query.results.channel.item.forecast.length; i++) {
        forecastForDay = response.data.query.results.channel.item.forecast[i];
        forecastFor10Days.push(forecastForDay);
      }
      weatherForecastObj = {
        location: locationStr,
        currentTemp: temp,
        forecast: forecastFor10Days
      };
      fetchedWeatherForecast.push(weatherForecastObj);
      self.setState({
        weatherForecast: fetchedWeatherForecast
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    const locationStr = nextProps.location;
    const url = `https://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='${nextProps.location}')&format=json`;
    const self = this;
    axios.get(url).then(function(response) {
      const temp = response.data.query.results.channel.item.condition.temp;
      let fetchedWeatherForecast = [];
      let weatherForecastObj;
      let forecastFor10Days = [];
      let forecastForDay;
      for(var i=0; i<response.data.query.results.channel.item.forecast.length; i++) {
        forecastForDay = response.data.query.results.channel.item.forecast[i];
        forecastFor10Days.push(forecastForDay);
      }
      weatherForecastObj = {
        location: locationStr,
        currentTemp: temp,
        forecast: forecastFor10Days
      };
      fetchedWeatherForecast.push(weatherForecastObj);
      self.setState({
        weatherForecast: fetchedWeatherForecast
      });
    });
  }

  render() {
    const locationStr = this.props.location;
    const weatherForecast = this.state.weatherForecast;
    let forecastForLocation;
    let forecastFor10Days = [];
    let weatherTiles;
    if(weatherForecast.length > 0) {
      forecastForLocation = getForecastForLocation(weatherForecast, locationStr);
      if (forecastForLocation) {
        forecastFor10Days = forecastForLocation.forecast;
        weatherTiles = forecastFor10Days.map(function(forecastForDay){
          return (
            <div key={forecastForDay.date}>
              <WeatherTileComponent forecast={forecastForDay} />
            </div>
          );
        })
      }
    }

    return <div>{weatherTiles}</div>;
  }
}

export default WeatherReportComponent;
