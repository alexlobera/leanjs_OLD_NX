import React, { Component } from 'react';

import TextField from './TextField';

export const onlyTime = value => (isValid(value) ? null : 'Time not valid');

function isValid(val = '') {
  let regexp = /^\d{0,2}?:?\d{0,2}$/,
    valArr = [];

  if (!regexp.test(val)) {
    return false;
  }

  const [hoursStr, minutesStr] = val.split(':');

  const hours = Number(hoursStr);
  const minutes = Number(minutesStr);
  const isValidHour = hours => {
    return Number.isInteger(hours) && hoursStr.length === 1
      ? hours < 3
      : hours >= 0 && hours < 24;
  };
  const isValidMinutes = minutes =>
    (Number.isInteger(minutes) && hours >= 0 && hours < 24) ||
    Number.isNaN(minutes);
  if (!isValidHour(hours) || !isValidMinutes(minutes)) {
    return false;
  }

  if (minutes < 10 && Number(minutesStr[0]) > 5) {
    return false;
  }

  if (valArr.indexOf(':')) {
    valArr = val.split(':');
  } else {
    valArr.push(val);
  }

  // check mm and HH
  if (
    valArr[0] &&
    valArr[0].length &&
    (parseInt(valArr[0], 10) < 0 || parseInt(valArr[0], 10) > 23)
  ) {
    return false;
  }

  if (
    valArr[1] &&
    valArr[1].length &&
    (parseInt(valArr[1], 10) < 0 || parseInt(valArr[1], 10) > 59)
  ) {
    return false;
  }

  return true;
}

class TimeInput extends Component {
  constructor(props) {
    super(props);
    const { input: { value } = {} } = this.props;
    let time;
    if (typeof value === 'string') {
      time = value;
    } else if (typeof value === 'object') {
      let hour =
        typeof value.hour === 'function'
          ? value.hour()
          : typeof value.getHours === 'function'
          ? value.getHours()
          : value.hour;
      let minute =
        typeof value.minute === 'function'
          ? value.minute()
          : typeof value.getMinutes === 'function'
          ? value.getMinutes()
          : value.minute;
      time = `${hour}:${minute}`;
    }
    this.state = {
      time,
    };

    this.lastVal = '';
  }

  onChangeHandler(val) {
    if (val === this.state.time) {
      return;
    }
    if (isValid(val)) {
      if (
        val.length === 2 &&
        this.lastVal.length !== 3 &&
        val.indexOf(':') === -1
      ) {
        val = val + ':';
      }

      if (val.length === 2 && this.lastVal.length === 3) {
        val = val.slice(0, 1);
      }

      if (val.length > 5) {
        return false;
      }

      this.lastVal = val;

      this.setState({
        time: val,
      });

      const [hour, minute] = val.split(':');
      this.props.input &&
        this.props.input.onChange &&
        this.props.input.onChange({ hour, minute });
    }
  }

  render() {
    return (
      <TextField
        {...this.props}
        input={{ value: this.state.time }}
        onChange={e => this.onChangeHandler(e.target.value)}
      />
    );
  }
}

TimeInput.defaultProps = {
  placeholder: ' ',
};

export default TimeInput;
