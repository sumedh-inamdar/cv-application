import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { buttonText, clickHandler, className } = this.props;
    return (
      <div>
        <button onClick={clickHandler} className={className}>
          {buttonText}
        </button>
      </div>
    );
  }
}
AddButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.string
};
