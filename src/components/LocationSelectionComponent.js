import React, { Component } from 'react';
import { getUniqueCitiesForThisState } from '../util/fetch_states_cities';

class LocationSelectionComponent extends Component {

  /**
   * Constructor to start with initializations for state and binding
   * handlers for listeners. Handling state for State and City selection.
   * @param props props object to be used within component.
   */
  constructor(props) {
    super(props);
    this.state = {
      cityState: "ca",
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
    const cityEntries = getUniqueCitiesForThisState(this.state.cityState);
    this.setState({
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
    return (<select
            value={selectedCity}
            onChange={this.handleCityChange}
          >
            {citiesInState.map(createCityOptions)}
          </select>);
  }

  render() {
    return (
      <div>
        <select value={this.state.cityState} onChange={this.handleCityStateChange}>
          <option value="az">AZ</option>
          <option value="tx">TX</option>
          <option value="ca">CA</option>
          <option value="ny">NY</option>
        </select>
        {this.renderCitySelect()}
        <p>At present the city is {this.state.selectedCity}</p>
      </div>
    );
  }
}

export default LocationSelectionComponent;
