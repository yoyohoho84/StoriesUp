import React, { Component } from "react";
import Datetime from "react-datetime-picker";
import "./DatePicker.scss";

class DatePicker extends Component {
  state = {
    date: null,
  };

  componentDidUpdate(prevProps, prevState) {
    /* console.log('HEY FROM UPDATE CALENDAR ===>', this.state.date); */
    if(prevState.date !== this.state.date) {
      this.props.fetchDate(this.state.date)
    }
  }

  getDate = (day) => {
    this.setState({ date: day });
  };

  render() {
    return (
      <div>
        <Datetime
          onChange={this.getDate}
          value={this.state.date}
          disableClock={true}
          required={true}
          calendarClassName="calendar"
        />
      </div>
    );
  }
}

export default DatePicker