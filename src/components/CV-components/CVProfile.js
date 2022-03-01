import React, { Component } from 'react';
import '../../styles/CVMain.css';
import Field from './Field';

export default class CVProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: 'I am an aspiring developer.'
    };
    this.changeState = this.changeState.bind(this);
  }
  changeState(event) {
    const key = event.target.id.split('Input')[0];
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <div id="cvProfile">
        <div className="sectionHeading">Profile</div>
        <hr className="sectionBreak"></hr>
        <Field
          text={this.state.profile}
          handleChange={this.changeState}
          id="profile"
          maxLength={500}
          className="cvText"
        />
      </div>
    );
  }
}
