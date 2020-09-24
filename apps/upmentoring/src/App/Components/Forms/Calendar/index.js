import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS,
} from './helpers';

const formatDate = (date) => ({
  year: date.getFullYear(),
  month: date.getMonth(),
  day: date.getDate(),
});

class Calendar extends Component {
  state = { ...this.resolveStateFromProp(), today: new Date() };

  resolveStateFromDate(date) {
    const isDateObject = isDate(date);
    const _date = isDateObject ? date : new Date();

    return {
      current: isDateObject ? date : null,
      month: _date.getMonth() + 1,
      year: _date.getFullYear(),
    };
  }

  resolveStateFromProp() {
    return this.resolveStateFromDate(this.props.date);
  }

  getCalendarDates = () => {
    const { current, month, year } = this.state;
    const calendarMonth = month || +current.getMonth() + 1;
    const calendarYear = year || current.getFullYear();

    return calendar(calendarMonth, calendarYear);
  };

  gotoDate = (date) => (evt) => {
    evt && evt.preventDefault();
    const { current } = this.state;
    const { onChange } = this.props;

    !(current && isSameDay(date, current)) &&
      this.setState(this.resolveStateFromDate(date), () => {
        typeof onChange === 'function' && onChange(formatDate(date));
      });
  };

  gotoPreviousMonth = () => {
    const { month, year } = this.state;
    this.setState(getPreviousMonth(month, year));
  };

  gotoNextMonth = () => {
    const { month, year } = this.state;
    this.setState(getNextMonth(month, year));
  };

  gotoPreviousYear = () => {
    const { year } = this.state;
    this.setState({ year: year - 1 });
  };

  gotoNextYear = () => {
    const { year } = this.state;
    this.setState({ year: year + 1 });
  };

  handlePressure = (fn) => {
    if (typeof fn === 'function') {
      fn();
      this.pressureTimeout = setTimeout(() => {
        this.pressureTimer = setInterval(fn, 100);
      }, 500);
    }
  };

  clearPressureTimer = () => {
    this.pressureTimer && clearInterval(this.pressureTimer);
    this.pressureTimeout && clearTimeout(this.pressureTimeout);
  };

  clearDayTimeout = () => {
    this.dayTimeout && clearTimeout(this.dayTimeout);
  };

  handlePrevious = (evt) => {
    evt && evt.preventDefault();
    const fn = evt.shiftKey ? this.gotoPreviousYear : this.gotoPreviousMonth;
    this.handlePressure(fn);
  };

  handleNext = (evt) => {
    evt && evt.preventDefault();
    const fn = evt.shiftKey ? this.gotoNextYear : this.gotoNextMonth;
    this.handlePressure(fn);
  };

  renderMonthAndYear = () => {
    const { month, year } = this.state;
    const monthname = Object.keys(CALENDAR_MONTHS)[
      Math.max(0, Math.min(month - 1, 11))
    ];

    return (
      <Styled.CalendarHeader>
        <Styled.ArrowLeft
          onMouseDown={this.handlePrevious}
          onMouseUp={this.clearPressureTimer}
          title="Previous Month"
        />
        <Styled.CalendarMonth>
          {monthname} {year}
        </Styled.CalendarMonth>
        <Styled.ArrowRight
          onMouseDown={this.handleNext}
          onMouseUp={this.clearPressureTimer}
          title="Next Month"
        />
      </Styled.CalendarHeader>
    );
  };

  renderDayLabel = (day, index) => {
    const daylabel = WEEK_DAYS[day].toUpperCase();
    return (
      <Styled.CalendarDay key={daylabel} index={index}>
        {daylabel}
      </Styled.CalendarDay>
    );
  };

  renderCalendarDate = (date, index) => {
    const { current, month, year, today } = this.state;
    const _date = new Date(date.join('-'));

    const isToday = isSameDay(_date, today);
    const isCurrent = current && isSameDay(_date, current);
    const inMonth =
      month && year && isSameMonth(_date, new Date([year, month, 1].join('-')));

    const onClick = this.gotoDate(_date);

    const props = { index, inMonth, onClick, title: _date.toDateString() };

    const DateComponent = isCurrent
      ? Styled.HighlightedCalendarDate
      : isToday
      ? Styled.TodayCalendarDate
      : Styled.CalendarDate;

    return (
      <DateComponent key={getDateISO(_date)} {...props}>
        {_date.getDate()}
      </DateComponent>
    );
  };

  componentDidMount() {
    const now = new Date();
    const tomorrow = new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000;
    const ms = tomorrow - now;

    this.dayTimeout = setTimeout(() => {
      this.setState({ today: new Date() }, this.clearDayTimeout);
    }, ms);
  }

  componentDidUpdate(prevProps) {
    const { date, onChange } = this.props;
    const { date: prevDate } = prevProps;
    const dateMatch = isSameDay(date, prevDate);

    !dateMatch &&
      this.setState(this.resolveStateFromDate(date), () => {
        typeof onChange === 'function' && onChange(formatDate(date));
      });
  }

  componentWillUnmount() {
    this.clearPressureTimer();
    this.clearDayTimeout();
  }

  render() {
    return (
      <Styled.CalendarContainer>
        {this.renderMonthAndYear()}

        <Styled.CalendarGrid>
          <Fragment>{Object.keys(WEEK_DAYS).map(this.renderDayLabel)}</Fragment>

          <Fragment>
            {this.getCalendarDates().map(this.renderCalendarDate)}
          </Fragment>
        </Styled.CalendarGrid>
      </Styled.CalendarContainer>
    );
  }
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

export default Calendar;
