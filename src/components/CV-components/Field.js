import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/commonStyles.css';
import '../../styles/Field.css';
import FieldDisplay from './FieldDisplay';
import FieldTextArea from './FieldTextArea';
import { YearPicker, MonthPicker } from 'react-dropdown-date';
import { getMonthText, getMonthNum } from '../../utilities/constants';

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
      year,
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
      case 'monthDropdown':
        return (
          <MonthPicker
            short
            defaultValue={'mo'}
            year={year} // mandatory
            required={true} // default is false
            value={getMonthNum(text)} // mandatory
            onChange={(month) => {
              const psuedoEvent = { target: { value: getMonthText(month) } };
              handleChange(psuedoEvent);
              this.handleSubmit();
              console.log(month);
            }}
            name={'month'}
            classes={'monthPicker cvText'}
            optionClasses={'option classes'}
          />
        );
      case 'yearDropdown':
        return (
          <YearPicker
            defaultValue={'yr'}
            start={1950} // default is 1900
            reverse // default is ASCENDING
            required={true} // default is false
            value={text} // mandatory
            onChange={(year) => {
              // mandatory
              const psuedoEvent = { target: { value: year } };
              handleChange(psuedoEvent);
              this.handleSubmit();
              console.log(year);
            }}
            name={'year'}
            classes={'yearPicker cvText'}
            optionClasses={'option classes'}
          />
        );
    }
  }
}
Field.propTypes = {
  text: PropTypes.string.isRequired,
  year: PropTypes.string,
  editMode: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleHover: PropTypes.func,
  id: PropTypes.string,
  maxLength: PropTypes.number,
  className: PropTypes.string
};
