import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default class FieldTextArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text, handleChange, handleSubmit, maxLength, className } =
      this.props;
    return (
      <form onSubmit={handleSubmit} className="fieldForm">
        <textarea
          value={text}
          onChange={handleChange}
          maxLength={maxLength}
          className={className}
          placeholder="Placeholder"
        />
        <FontAwesomeIcon
          icon={faCheck}
          onClick={handleSubmit}
          className="check"
          title="Submit"
        />
      </form>
    );
  }
}
FieldTextArea.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  className: PropTypes.string
};
