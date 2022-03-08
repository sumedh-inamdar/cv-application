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
      date,
      editMode,
      options,
      handleChange,
      handleHover,
      className,
      maxLength
    } = this.props;

    switch (this.state.mode) {
      case 'display':
        return (
          <FieldDisplay
            text={text}
            handleClick={() => this.handleClick(editMode)}
            handleHover={handleHover}
            className={className + '__disp'}
          />
        );
      case 'textarea':
        return (
          <FieldTextArea
            text={text}
            handleChange={handleChange}
            handleSubmit={this.handleSubmit}
            maxLength={maxLength}
            className={className + '__textarea'}
          />
        );
      case 'reactCalendar':
        return (
          <Calendar
            value={date}
            onChange={(value) => {
              handleChange(value);
              this.handleSubmit();
            }}
            maxDetail="year"
            minDetail="decade"
            formatMonth={(locale, date) => format(date, 'MMM')}
          />
        );
      case 'dropdown':
        return (
          <Dropdown
            value={text}
            options={options}
            onChange={(value) => {
              handleChange(value);
              this.handleSubmit();
            }}
          />
        );
    }
  }
}
Field.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  year: PropTypes.string,
  editMode: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleHover: PropTypes.func,
  maxLength: PropTypes.number,
  className: PropTypes.string,
  options: PropTypes.array
};
