import React, { Component } from 'react';
import '../styles/CVContainer.css';
import Field from './Field';

export default class CVHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Sumedh',
      lastName: 'Inamdar'
    };
    this.changeState = this.changeState.bind(this);
  }
  changeState(event) {
    const key = event.target.id.split('input')[0];
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <div id="cvHeader">
        <Field
          text={this.state.firstName}
          handleChange={this.changeState}
          id="firstName"
        />
        <Field
          text={this.state.lastName}
          handleChange={this.changeState}
          id="lastName"
        />
      </div>
    );
  }
}
