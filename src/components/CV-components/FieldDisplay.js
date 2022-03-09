import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FieldDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text, handleClick, handleHover, className, placeholder } =
      this.props;

    return (
      <div
        className={className + '__disp fieldDisp'}
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
        {text || placeholder}
      </div>
    );
  }
}
FieldDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleHover: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string
};
