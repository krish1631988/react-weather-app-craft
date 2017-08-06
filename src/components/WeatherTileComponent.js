import React, { Component } from 'react';
import { isTodaysDate } from '../util/date_utils';

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
      descriptionText: 'Sunny',
      currentTemp: '57',
      date: '06 Aug 2017'
    };

    return (
      <div>
        {
          isTodaysDate(temperature.date) &&
          <CurrentWeatherConditionComponent
            currentTemp={temperature.currentTemp}
          />
        }
        <FormattedDateComponent date={temperature.date}/>
        <TemperatureDescriptionComponent temperature={temperature}/>
      </div>
    );
  }
}

export default WeatherTileComponent;
