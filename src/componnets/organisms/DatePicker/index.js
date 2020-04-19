import React, { Component } from "react";
import Datetime from "react-datetime-picker";
import "./DatePicker.scss";

class DatePicker extends Component {
  state = {
    date: null,
  };

  componentDidUpdate(prevProps, prevState) {
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
          minDate={new Date()}
        />
      </div>
    );
  }
}

export default DatePicker