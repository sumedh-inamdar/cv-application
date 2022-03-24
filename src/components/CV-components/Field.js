import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/commonStyles.css';
import '../../styles/Field.css';
import FieldDisplay from './FieldDisplay';
import FieldTextArea from './FieldTextArea';
import Calendar from 'react-calendar';
import Dropdown from './Dropdown';
import '../../styles/Calendar.css';
import { format } from 'date-fns';

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'display'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(editMode) {
    this.setState({
      mode: editMode
    });
  }
  handleSubmit() {
    this.setState({
      mode: 'display'
    });
  }

  render() {
    const {
      text,
      rows,
      cols,
      date,
      editMode,
      options,
      handleChange,
      handleHover,
      className,
      maxLength,
      placeholder,
      maxDate,
      minDate
    } = this.props;
    const fieldDisplay = (
      <FieldDisplay
        text={text}
        handleClick={() => this.handleClick(editMode)}
        handleHover={handleHover}
        className={className}
        placeholder={placeholder}
      />
    );
    const fieldTextArea = (
      <FieldTextArea
        text={text}
        handleChange={handleChange}
        handleSubmit={this.handleSubmit}
        maxLength={maxLength}
        className={className}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
      />
    );
    const calendar = (
      <Calendar
        value={date}
        onChange={(value) => {
          handleChange(value);
          this.handleSubmit();
        }}
        maxDetail="year"
        minDetail="decade"
        maxDate={maxDate}
        minDate={minDate}
        formatMonth={(locale, date) => format(date, 'MMM')}
      />
    );
    const dropdown = (
      <Dropdown
        value={text}
        options={options}
        onChange={(value) => {
          handleChange(value);
          this.handleSubmit();
        }}
      />
    );

    switch (this.state.mode) {
      case 'display':
        return fieldDisplay;
      case 'textarea':
        return fieldTextArea;
      case 'reactCalendar':
        return calendar;
      case 'dropdown':
        return dropdown;
    }
  }
}
Field.propTypes = {
  text: PropTypes.string.isRequired,
  rows: PropTypes.number,
  cols: PropTypes.number,
  date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  year: PropTypes.string,
  editMode: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleHover: PropTypes.func,
  maxLength: PropTypes.number,
  className: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  maxDate: PropTypes.object,
  minDate: PropTypes.object
};
