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
    let usState, cityInState;
    if (localStorage.getItem('usState') && localStorage.getItem('cityInState')) {
      usState = localStorage.getItem('usState');
      cityInState = localStorage.getItem('cityInState');
    }
    // this.state = {
    //   usState: "ca",
    //   cityInState: "sunnyvale"
    // };

    this.state = {
      usState: usState,
      cityInState: cityInState
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
    localStorage.setItem('usState', pStateStr);
    localStorage.setItem('cityInState', citiesInState[0]);

    // If location selection changes in another tab, we should account for that.
    // const self = this;
    // setInterval(function() {
    //   self.setState({
    //     usState: localStorage.getItem('usState'),
    //     cityInState: localStorage.getItem('cityInState')
    //   });
    // }, 2000);
  }

  /**
   * Handler method to listen to City selection change under LocationSelectionComponent.
   * @param pCityStr City string sent by LocationSelectionComponent.
   */
  handleCityChange(pCityStr) {
    this.setState({cityInState: pCityStr});
    localStorage.setItem('cityInState', pCityStr);
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
