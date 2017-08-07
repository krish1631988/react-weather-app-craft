import React, { Component } from 'react';
import { isTodaysDate } from '../util/date_utils';

import CurrentWeatherConditionComponent from './CurrentWeatherConditionComponent';
import FormattedDateComponent from './FormattedDateComponent';
import TemperatureDescriptionComponent from './TemperatureDescriptionComponent';

class WeatherTileComponent extends Component {
  render() {
    const forecast = this.props.forecast;
    return (
      <div>
        {
          isTodaysDate(forecast.date) &&
          <CurrentWeatherConditionComponent
            currentTemp={forecast.currentTemp}
          />
        }
        <FormattedDateComponent date={forecast.date}/>
        <TemperatureDescriptionComponent temperature={forecast}/>
      </div>
    );
  }
}

export default WeatherTileComponent;
