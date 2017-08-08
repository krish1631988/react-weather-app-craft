import React, { Component } from 'react';
import { getUniqueCitiesForThisState, getUSStateAbbreviations } from '../util/fetch_states_cities';

import '../style/LocationSelectionComponent.css';

class LocationSelectionComponent extends Component {

  /**
   * Constructor to start with initializations for state and binding
   * handlers for listeners. Handling state for State and City selection.
   * @param props props object to be used within component.
   */
  constructor(props) {
    super(props);

    this.handleUSStateChange = this.handleUSStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  /**
   * Handler method for onChange event on State select element.
   * We can now call the event handler being set on 'onUSStateChange'
   * prop of component. Handler has been set under WeatherAppComponent.
   * @param event onChnage event object emitted by select.
   */
  handleUSStateChange(event) {
    this.props.onUSStateChange(event.target.value);
  }

  /**
   * Handler method for onChange event on City select element.
   * We can now call the event handler being set on 'onCityChange'
   * prop of component. Handler has been set under WeatherAppComponent.
   * @param event onChnage event object emitted by select.
   */
  handleCityChange(event) {
    this.props.onCityChange(event.target.value);
  }

  /**
   * Sub-render method to render City select element.
   * @param event onChnage event object emitted by select.
   */
  renderCitySelect() {
    const cityInState = this.props.cityInState;
    const usState = this.props.usState;
    const citiesInState = getUniqueCitiesForThisState(usState);
    const createCityOptions = (city) => {
      return <option key={city.toLowerCase()} value={city.toLowerCase()}>{city}</option>;
    };
    return (
      <select
        className = "city-select"
        value={cityInState}
        onChange={this.handleCityChange}
      >
        {citiesInState.map(createCityOptions)}
      </select>
    );
  }

  /**
   * Sub-render method to render State select element.
   * @param event onChnage event object emitted by select.
   */
  renderStateSelect() {
    const usState = this.props.usState;
    const allUSStateAbbreviations = getUSStateAbbreviations();
    const createUSStateOptions = (usState) => {
      return <option key={usState.toLowerCase()} value={usState.toLowerCase()}>{usState}</option>;
    };
    return (
      <select
        className = "state-select"
        value={usState}
        onChange={this.handleUSStateChange}
      >
        {allUSStateAbbreviations.map(createUSStateOptions)}
      </select>
    );
  }

  /**
   * Render method to render both US State and Cities in State dropdowns.
   */
  render() {
    return (
      <div className = "location-widgets">
        {this.renderStateSelect()}
        {this.renderCitySelect()}
      </div>
    );
  }
}

export default LocationSelectionComponent;
