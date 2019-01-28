import React, { Component } from "react";

class DatePicker extends Component {
  render() {
    return (
      <div className="field-datepicker">
        <div className="picker">
          <input type="date" />
        </div>
        <div className="icon icon-date" />
      </div>
    );
  }
}

export default DatePicker;
