import React, { Component } from 'react';

class TemperatureDescriptionComponent extends Component {

  /**
   * Simple render method to grab the props passed in for component
   * and render as needed.
   */
  render() {
    const forecast = this.props.temperature;
    return (
      <div>
        <div>
          <h2>
            High {forecast.high} F | Low {forecast.low} F
          </h2>
        </div>
        <div>
          <h3>
            {forecast.descriptionText}
          </h3>
        </div>
      </div>
    );
  }
}

export default TemperatureDescriptionComponent;
