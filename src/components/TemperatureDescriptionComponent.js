import React, { Component } from 'react';

import { isTodaysDate } from '../util/date_utils';

import '../style/TemperatureDescriptionComponent.css';

class TemperatureDescriptionComponent extends Component {

  /**
   * Simple render method to grab the props passed in for component
   * and render as needed.
   */
  render() {
    const forecast = this.props.forecast;
    const currentTemp = this.props.currentTemp;
    const currentTempCode = this.props.currentTempCode;
    const currentTempDescription = this.props.currentTempDescription;
    const tmpImgSrcUrl = isTodaysDate(forecast.date) ?
      `http://l.yimg.com/a/i/us/we/52/${currentTempCode}.gif` :
      `http://l.yimg.com/a/i/us/we/52/${forecast.code}.gif`;
    return (
      <div className="temperature-wrapper-div">
        {
          isTodaysDate(forecast.date) ?
          <div className="temperature-description">
            <p className="current-temperature-number">
              <strong>Temp : </strong> {currentTemp} F
            </p>
            <p className="current-temperature-description">
              {currentTempDescription}
              <img src={tmpImgSrcUrl} />
            </p>
            <p className="current-temperature-high-low">
              <strong> High : </strong> {forecast.high} F
              <strong> Low : </strong> {forecast.low} F
            </p>
          </div>
        :
          <div className="temperate-description">
            <p className="other-temperature-description">
              {forecast.text}
              <img src={tmpImgSrcUrl} />
            </p>
            <p className="other-temperature-high-low">
              <strong> High : </strong> {forecast.high} F
              <strong> Low : </strong> {forecast.low} F
            </p>
          </div>
        }
      </div>
    );
  }
}

export default TemperatureDescriptionComponent;
