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
import { exampleData } from '../../utilities/constants';

export default class CVHeader extends Component {
  constructor(props) {
    super(props);
    const data = exampleData.CVHeader;
    this.state = {
      firstName: data.firstName,
      lastName: data.lastName,
      title: data.title,
      website: data.website,
      linkedin: data.linkedin,
      email: data.email,
      phone: data.phone,
      location: data.location
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
              cols={10}
              rows={1}
              placeholder="First Name"
            />
            <Field
              text={this.state.lastName}
              editMode="textarea"
              handleChange={(event) => this.changeState(event, 'lastName')}
              className="lastName"
              maxLength={15}
              cols={10}
              rows={1}
              placeholder="Last Name"
            />
          </div>
          <Field
            text={this.state.title}
            editMode="textarea"
            handleChange={(event) => this.changeState(event, 'title')}
            className="title"
            maxLength={35}
            cols={15}
            rows={1}
            placeholder="Title"
          />
        </div>
        <div id="cvHeaderBottom">
          <div className="flexRow contactInfo" id="websiteLink">
            <FontAwesomeIcon
              icon={faGlobe}
              className="contactIcon"
              title="github / website"
            />
            <Field
              text={this.state.website}
              editMode="textarea"
              handleChange={(event) => this.changeState(event, 'website')}
              maxLength={50}
              className="websiteInfo"
              cols={14}
              rows={1}
              placeholder="github / website"
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
              cols={14}
              rows={1}
              placeholder="linkedin"
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
              cols={14}
              rows={1}
              placeholder="email"
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
              cols={14}
              rows={1}
              placeholder="phone"
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
              cols={14}
              rows={1}
              placeholder="location"
            />
          </div>
        </div>
      </div>
    );
  }
}
