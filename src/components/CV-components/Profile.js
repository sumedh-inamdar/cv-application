import React, { Component } from 'react';
import '../../styles/commonStyles.css';
import '../../styles/Profile.css';
import Field from './Field';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: 'I am an aspiring developer.'
    };
    this.changeState = this.changeState.bind(this);
  }
  changeState(event, property) {
    this.setState({
      [property]: event.target.value
    });
  }
  render() {
    return (
      <div id="cvProfile">
        <div className="sectionHeading">Profile</div>
        <hr className="sectionBreak"></hr>
        <Field
          text={this.state.profile}
          editMode="textarea"
          handleChange={(event) => this.changeState(event, 'profile')}
          maxLength={500}
          className="cvText"
        />
      </div>
    );
  }
}
