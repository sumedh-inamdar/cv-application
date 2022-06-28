import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function auto_resize(element, offset) {
  element.style.height = element.scrollHeight + offset + 'px';
}

export default class FieldTextArea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      text,
      cols,
      handleChange,
      handleSubmit,
      maxLength,
      className,
      placeholder
    } = this.props;

    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        handleSubmit();
      }
    }

    return (
      <form onSubmit={handleSubmit} className={className + ' fieldForm'}>
        <textarea
          value={text}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          maxLength={maxLength}
          className={className + ' fieldTextArea'}
          placeholder={placeholder}
          cols={cols}
          onInput={(e) => auto_resize(e.target)}
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
  componentDidMount() {
    const element = document.querySelector('textarea.' + this.props.className);
    auto_resize(element, 1);
  }
}
FieldTextArea.propTypes = {
  text: PropTypes.string.isRequired,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  cols: PropTypes.number,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  className: PropTypes.string
};
