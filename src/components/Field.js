import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Field.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function FieldDisplay({ text, handleClick, id }) {
  return (
    <div className="fieldDisp" onClick={handleClick} id={id + 'disp'}>
      {text}
    </div>
  );
}
FieldDisplay.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

function FieldInput({ text, handleChange, handleSubmit, id }) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} id={id + 'input'} />
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
  id: PropTypes.string.isRequired
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
    const { text, handleChange, id } = this.props;

    return this.state.mode === 'display' ? (
      <FieldDisplay text={text} handleClick={this.handleClick} id={id} />
    ) : (
      <FieldInput
        text={text}
        handleChange={handleChange}
        handleSubmit={this.handleSubmit}
        id={id}
      />
    );
  }
}
Field.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
