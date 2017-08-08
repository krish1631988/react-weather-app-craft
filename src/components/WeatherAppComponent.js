import React, { Component } from 'react';

import { getUniqueCitiesForThisState } from '../util/fetch_states_cities';
import LocationSelectionComponent from './LocationSelectionComponent';
import WeatherReportComponent from './WeatherReportComponent';

import '../style/WeatherAppComponent.css';

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
    const citiesInState = getUniqueCitiesForThisState(pStateStr)
    this.setState({
      usState: pStateStr,
      cityInState: citiesInState[0]
    });
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
    const location = `${this.state.cityInState}, ${this.state.usState}`;
    return (
      <div className="weather-app">
        <p className="app-intro">
          Start by selecting a location of interest.
        </p>
        <LocationSelectionComponent
          className="location-selection-component"
          usState={this.state.usState}
          cityInState={this.state.cityInState}
          onUSStateChange={this.handleUSStateChange}
          onCityChange={this.handleCityChange}
        />
        <WeatherReportComponent location={location}/>
      </div>
    );
  }
}

export default WeatherAppComponent;
