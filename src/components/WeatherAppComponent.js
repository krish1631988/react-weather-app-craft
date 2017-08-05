import React, { Component } from 'react';

import LocationSelectionComponent from './LocationSelectionComponent';
import WeatherReportComponent from './WeatherReportComponent';

class WeatherAppComponent extends Component {
  render() {
    return (
      <div>
        <LocationSelectionComponent />
        <WeatherReportComponent />
      </div>
    );
  }
}

export default WeatherAppComponent;
