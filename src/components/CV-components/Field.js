import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/commonStyles.css';
import '../../styles/Field.css';
import FieldDisplay from './FieldDisplay';
import FieldTextArea from './FieldTextArea';
import Calendar from 'react-calendar';
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
      handleChange,
      handleHover,
      id,
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
            id={id}
            className={className}
          />
        );
      case 'textarea':
        return (
          <FieldTextArea
            text={text}
            handleChange={handleChange}
            handleSubmit={this.handleSubmit}
            id={id}
            maxLength={maxLength}
            className={className}
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
  id: PropTypes.string,
  maxLength: PropTypes.number,
  className: PropTypes.string
};
