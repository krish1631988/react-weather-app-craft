import React, { Component } from 'react';
import { getFormattedDate } from '../util/date_utils';

class FormattedDateComponent extends Component {

  /**
   * Simple render method to grab the date prop and render
   * with required format.
   */
  render() {
    const formattedDate = getFormattedDate(this.props.date);
    return (
      <div>
        <h1>{formattedDate}</h1>
      </div>
    );
  }
}

export default FormattedDateComponent;
