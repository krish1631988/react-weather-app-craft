import React, { Component } from 'react';

import { isTodaysDate } from '../util/date_utils';

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
      <div>
        {
          isTodaysDate(forecast.date) ?
          <div>
            <p>
              <strong>Temp : </strong> {currentTemp} F
            </p>
            <p>
              {currentTempDescription}
              <img src={tmpImgSrcUrl} />
            </p>
            <p>
              <strong> High : </strong> {forecast.high} F
              <strong> Low : </strong> {forecast.low} F
            </p>
          </div>
        :
          <div>
            <p>
              {forecast.text}
              <img src={tmpImgSrcUrl} />
            </p>
            <p>
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
