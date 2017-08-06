import React, { Component } from 'react';

class CurrentWeatherConditionComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>At present</h1>
        </div>
        <div>
          <h2>{this.props.currentTemp} F</h2>
        </div>
      </div>
    );
  }
}

export default CurrentWeatherConditionComponent;
