import React, { Component } from 'react';

import LocationSelectionComponent from './LocationSelectionComponent';
import WeatherReportComponent from './WeatherReportComponent';

class WeatherAppComponent extends Component {

  /**
   * Constructor to start with initializations for state and binding
   * handlers for listeners. Handling state for State and City selection.
   * @param props props object to be used within component.
   */
  constructor(props) {
    super(props);
    this.state = {
      usState: "ca",
      cityInState: "sunnyvale"
    };
    this.handleUSStateChange = this.handleUSStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  /**
   * Handler method to listen to State selection change under LocationSelectionComponent.
   * @param pStateStr State string sent by LocationSelectionComponent.
   */
  handleUSStateChange(pStateStr) {
    this.setState({usState: pStateStr});
  }

  /**
   * Handler method to listen to City selection change under LocationSelectionComponent.
   * @param pCityStr City string sent by LocationSelectionComponent.
   */
  handleCityChange(pCityStr) {
    this.setState({cityInState: pCityStr});
  }

  /**
   * Render method to render LocationSelectionComponent and WeatherReportComponent.
   */
  render() {
    return (
      <div>
        <LocationSelectionComponent
          usState={this.state.usState}
          cityInState={this.state.cityInState}
          onUSStateChange={this.handleUSStateChange}
          onCityChange={this.handleCityChange}
        />
        <WeatherReportComponent />
      </div>
    );
  }
}

export default WeatherAppComponent;
