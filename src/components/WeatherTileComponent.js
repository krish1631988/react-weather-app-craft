import React, { Component } from 'react';

import FormattedDateComponent from './FormattedDateComponent';
import TemperatureDescriptionComponent from './TemperatureDescriptionComponent';

class WeatherTileComponent extends Component {
  render() {
    const forecast = this.props.forecast;
    const currentTemp = this.props.currentTemp;
    const currentTempCode = this.props.currentTempCode;
    const currentTempDescription = this.props.currentTempDescription;
    return (
      <div>
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
