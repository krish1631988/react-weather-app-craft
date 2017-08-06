import React, { Component } from 'react';

import CurrentWeatherConditionComponent from './CurrentWeatherConditionComponent';
import FormattedDateComponent from './FormattedDateComponent';
import TemperatureDescriptionComponent from './TemperatureDescriptionComponent';

class WeatherTileComponent extends Component {
  render() {
    const temperature = {
      highInFnarenheit: '74',
      highInCelcius: '23',
      lowInFnarenheit: '56',
      lowInCelcius: '13',
      descriptionText: 'Sunny'
    };
    
    return (
      <div>
        <CurrentWeatherConditionComponent />
        <FormattedDateComponent date={new Date()}/>
        <TemperatureDescriptionComponent temperature={temperature}/>
      </div>
    );
  }
}

export default WeatherTileComponent;
