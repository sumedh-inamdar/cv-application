import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, options, onChange } = this.props;
    return (
      <label>
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={uniqid()} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
Dropdown.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func
};
