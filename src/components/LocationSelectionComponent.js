import React, { Component } from 'react';
import { getUniqueCitiesForThisState, getUSStateAbbreviations } from '../util/fetch_states_cities';

class LocationSelectionComponent extends Component {

  /**
   * Constructor to start with initializations for state and binding
   * handlers for listeners. Handling state for State and City selection.
   * @param props props object to be used within component.
   */
  constructor(props) {
    super(props);
    this.state = {
      cityState: "",
      citiesInState: [],
      selectedCity: ""
    };

    this.handleCityStateChange = this.handleCityStateChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }

  /**
   * Let us set the state partially based on state value.
   */
  componentWillMount() {
    const stateEntries = getUSStateAbbreviations();
    const cityEntries = getUniqueCitiesForThisState(stateEntries[0]);
    this.setState({
      cityState: stateEntries[0],
      citiesInState: cityEntries,
      selectedCity: cityEntries[0]
    });
  }

  /**
   * Handler method for onChange event on State select element.
   * @param event onChnage event object emitted by select.
   */
  handleCityStateChange(event) {
    const cityStateValue = event.target.value;
    const cityEntries = getUniqueCitiesForThisState(cityStateValue);
    this.setState({
      cityState: event.target.value,
      citiesInState: cityEntries,
      selectedCity: cityEntries[0]
    });
  }

  /**
   * Handler method for onChange event on City select element.
   * @param event onChnage event object emitted by select.
   */
  handleCityChange(event) {
    this.setState({selectedCity: event.target.value});
  }

  /**
   * Sub-render method to render City select element.
   * @param event onChnage event object emitted by select.
   */
  renderCitySelect() {
    const selectedCity = this.state.selectedCity;
    const citiesInState = this.state.citiesInState;
    const createCityOptions = (city) => {
      return <option key={city.toLowerCase()} value={city.toLowerCase()}>{city}</option>;
    };
    return (
      <select
        value={selectedCity}
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
    const cityState = this.state.cityState;
    const stateEntries = getUSStateAbbreviations();
    const createStateOptions = (usState) => {
      return <option key={usState.toLowerCase()} value={usState.toLowerCase()}>{usState}</option>;
    };
    return (
      <select
        value={cityState}
        onChange={this.handleCityStateChange}
      >
        {stateEntries.map(createStateOptions)}
      </select>
    );
  }

  render() {
    return (
      <div>
        {this.renderStateSelect()}
        {this.renderCitySelect()}
        <p>At present the State and City are {this.state.cityState} :: {this.state.selectedCity}.</p>
      </div>
    );
  }
}

export default LocationSelectionComponent;
