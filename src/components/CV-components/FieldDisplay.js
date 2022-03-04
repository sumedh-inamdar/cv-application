import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FieldDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text, handleClick, handleHover, id, className } = this.props;

    return (
      <div
        className={className + ' fieldDisp'}
        onClick={handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        id={id + 'Disp'}>
        {text || 'empty'}
      </div>
    );
  }
}
FieldDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleHover: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string
};
