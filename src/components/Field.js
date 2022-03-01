import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Field.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function FieldDisplay({ text, handleClick, id, className }) {
  return (
    //fix the className later
    <div
      className={className + ' fieldDisp'}
      onClick={handleClick}
      id={id + 'Disp'}>
      {text}
    </div>
  );
}
FieldDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

function FieldInput({
  text,
  handleChange,
  handleSubmit,
  id,
  maxLength,
  className
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleChange}
        id={id + 'Input'}
        maxLength={maxLength}
        className={className}
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
FieldInput.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};

export default class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'display'
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick() {
    this.setState({
      mode: 'input'
    });
  }
  handleSubmit() {
    this.setState({
      mode: 'display'
    });
  }

  render() {
    const { text, handleChange, id, className, maxLength } = this.props;

    return this.state.mode === 'display' ? (
      <FieldDisplay
        text={text}
        handleClick={this.handleClick}
        id={id}
        className={className}
      />
    ) : (
      <FieldInput
        text={text}
        handleChange={handleChange}
        handleSubmit={this.handleSubmit}
        id={id}
        maxLength={maxLength}
        className={className}
      />
    );
  }
}
Field.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};
