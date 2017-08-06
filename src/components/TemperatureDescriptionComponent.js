import React, { Component } from 'react';

class TemperatureDescriptionComponent extends Component {

  /**
   * Simple render method to grab the props passed in for component
   * and render as needed.
   */
  render() {
    const temperature = this.props.temperature;
    return (
      <div>
        <div>
          <h2>
            High {temperature.highInFnarenheit} F | {temperature.highInCelcius} C
          </h2>
        </div>
        <div>
          <h2>
            Low {temperature.lowInFnarenheit} F | {temperature.lowInCelcius} C
          </h2>
        </div>
        <div>
          <h3>
            {temperature.descriptionText}
          </h3>
        </div>
      </div>
    );
  }
}

export default TemperatureDescriptionComponent;
