import React, { Component } from 'react';

import FormattedDateComponent from './FormattedDateComponent';
import TemperatureDescriptionComponent from './TemperatureDescriptionComponent';

import '../style/WeatherTileComponent.css';

class WeatherTileComponent extends Component {
  render() {
    const forecast = this.props.forecast;
    const currentTemp = this.props.currentTemp;
    const currentTempCode = this.props.currentTempCode;
    const currentTempDescription = this.props.currentTempDescription;
    return (
      <div
        className="weather-tile"
        style= { parseInt(forecast.high, 10) >= 86 ? {backgroundColor: '#FF8500'} :
          parseInt(forecast.high, 10) >= 68 && parseInt(forecast.high, 10) < 86 ? {backgroundColor: '#ffc600'} :
          parseInt(forecast.high, 10) >= 50 && parseInt(forecast.high, 10) < 68 ? {backgroundColor: '#94AF10'} :
          parseInt(forecast.high, 10) >= 32 && parseInt(forecast.high, 10) < 50 ? {backgroundColor: '#06799F'} :
          {backgroundColor: '#233884'} }
      >
        <FormattedDateComponent date={forecast.date}/>
        <TemperatureDescriptionComponent
          currentTemp={currentTemp}
          currentTempCode={currentTempCode}
          currentTempDescription={currentTempDescription}
          forecast={forecast}
        />
      </div>
    );
  }
}

export default WeatherTileComponent;
