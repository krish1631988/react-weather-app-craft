import React, { Component } from 'react';

import CurrentWeatherConditionComponent from './CurrentWeatherConditionComponent';
import FormattedDateComponent from './FormattedDateComponent';
import TemperatureDescriptionComponent from './TemperatureDescriptionComponent';

class WeatherTileComponent extends Component {
  render() {
    return (
      <div>
        <CurrentWeatherConditionComponent />
        <FormattedDateComponent date={new Date()}/>
        <TemperatureDescriptionComponent />
      </div>
    );
  }
}

export default WeatherTileComponent;
