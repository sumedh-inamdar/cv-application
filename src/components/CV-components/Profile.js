import React, { Component } from 'react';
import '../../styles/commonStyles.css';
import '../../styles/Profile.css';
import Field from './Field';
import { exampleData } from '../../utilities/constants';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    const data = exampleData.Profile;
    this.state = {
      profile: data.profile
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
        <div className="sectionHeading">
          <div>Profile</div>
        </div>
        <Field
          text={this.state.profile}
          editMode="textarea"
          handleChange={(event) => this.changeState(event, 'profile')}
          maxLength={500}
          cols={17}
          rows={4}
          placeholder="Profile description"
          className="profile"
        />
      </div>
    );
  }
}
