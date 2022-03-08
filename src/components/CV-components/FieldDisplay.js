import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FieldDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text, handleClick, handleHover, className } = this.props;

    return (
      <div
        className={className + ' fieldDisp'}
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>
        {text || 'empty'}
      </div>
    );
  }
}
FieldDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleHover: PropTypes.func,
  className: PropTypes.string
};
