import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default class FieldTextArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      text,
      rows,
      cols,
      handleChange,
      handleSubmit,
      maxLength,
      className,
      placeholder
    } = this.props;
    return (
      <form onSubmit={handleSubmit} className={className + '__form fieldForm'}>
        <textarea
          value={text}
          onChange={handleChange}
          maxLength={maxLength}
          className={className + '__textArea fieldTextArea'}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
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
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  cols: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  className: PropTypes.string
};
