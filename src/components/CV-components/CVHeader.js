import React, { Component } from 'react';
import '../../styles/commonStyles.css';
import '../../styles/CVContainer.css';
import '../../styles/CVHeader.css';
import Field from './Field';
import {
  faEnvelope,
  faGlobe,
  faLocationPin,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CVHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'First Name',
      lastName: 'Last Name',
      title: 'Title',
      website: 'github / personal',
      linkedin: 'linkedin',
      email: 'email',
      phone: 'phone',
      location: 'location'
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
      <div id="cvHeader">
        <div id="cvHeaderTop">
          <div id="cvHeaderName">
            <Field
              text={this.state.firstName}
              editMode="textarea"
              handleChange={(event) => this.changeState(event, 'firstName')}
              className="firstName"
              maxLength={15}
            />
            <Field
              text={this.state.lastName}
              editMode="textarea"
              handleChange={(event) => this.changeState(event, 'lastName')}
              className="lastName"
              maxLength={15}
            />
          </div>
          <Field
            text={this.state.title}
            editMode="textarea"
            handleChange={(event) => this.changeState(event, 'title')}
            className="title"
            maxLength={35}
          />
        </div>
        <div id="cvHeaderBottom">
          <div className="flexRow contactInfo" id="websiteLink">
            <FontAwesomeIcon
              icon={faGlobe}
              className="contactIcon"
              title="Website / Github"
            />
            <Field
              text={this.state.website}
              editMode="textarea"
              handleChange={(event) => this.changeState(event, 'website')}
              maxLength={50}
              className="websiteInfo"
            />
          </div>
          <div className="flexRow contactInfo" id="linkedIn">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="contactIcon"
              title="LinkedIn"
            />
            <Field
              text={this.state.linkedin}
              editMode="textarea"
              handleChange={(event) => this.changeState(event, 'linkedin')}
              maxLength={50}
              className="linkedInInfo"
            />
          </div>
          <div className="flexRow contactInfo" id="emailLink">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contactIcon"
              title="Email"
            />
            <Field
              text={this.state.email}
              editMode="textarea"
              handleChange={(event) => this.changeState(event, 'email')}
              maxLength={50}
              className="emailInfo"
            />
          </div>
          <div className="flexRow contactInfo" id="phoneNumber">
            <FontAwesomeIcon
              icon={faPhone}
              className="contactIcon"
              title="Phone"
            />
            <Field
              text={this.state.phone}
              editMode="textarea"
              handleChange={(event) => this.changeState(event, 'phone')}
              maxLength={15}
              className="phoneInfo"
            />
          </div>
          <div className="flexRow contactInfo" id="location">
            <FontAwesomeIcon
              icon={faLocationPin}
              className="contactIcon"
              title="Location"
            />
            <Field
              text={this.state.location}
              editMode="textarea"
              handleChange={(event) => this.changeState(event, 'location')}
              maxLength={50}
              className="locationInfo"
            />
          </div>
        </div>
      </div>
    );
  }
}
