import React, { Component } from 'react';

import { getFormattedDate } from '../util/date_utils';

import '../style/FormattedDateComponent.css';

class FormattedDateComponent extends Component {

  /**
   * Simple render method to grab the date prop and render
   * with required format.
   */
  render() {
    const formattedDate = getFormattedDate(this.props.date);
    return (
      <div className="formatted-date">
        <h3 className="formatted-date-text">{formattedDate}</h3>
      </div>
    );
  }
}

export default FormattedDateComponent;
