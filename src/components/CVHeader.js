import React, { Component } from 'react';
import '../styles/CVContainer.css';
import '../styles/CVHeader.css';
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
      firstName: 'Sumedh',
      lastName: 'Inamdar',
      title: 'Software Engineer',
      website: 'github.com/sumedh-inamdar',
      linkedin: 'linkedin.com/sinamdar',
      email: 'sxxx@gmail.com',
      phone: 'XXX-XXX-XXXX',
      location: 'San Francisco'
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
      <div id="cvHeader">
        <div id="cvHeaderLeft">
          <div id="cvHeaderName">
            <Field
              text={this.state.firstName}
              handleChange={this.changeState}
              id="firstName"
              maxLength={15}
            />
            <Field
              text={this.state.lastName}
              handleChange={this.changeState}
              id="lastName"
              maxLength={15}
            />
          </div>
          <Field
            text={this.state.title}
            handleChange={this.changeState}
            id="title"
            maxLength={35}
          />
        </div>
        <div id="cvHeaderRight">
          <div className="flexRow" id="websiteLink">
            <FontAwesomeIcon
              icon={faGlobe}
              className="contactIcon"
              title="Website / Github"
            />
            <Field
              text={this.state.website}
              handleChange={this.changeState}
              id="website"
              maxLength={50}
              className="contactInfo"
            />
          </div>
          <div className="flexRow" id="linkedIn">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="contactIcon"
              title="LinkedIn"
            />
            <Field
              text={this.state.linkedin}
              handleChange={this.changeState}
              id="location"
              maxLength={50}
              className="contactInfo"
            />
          </div>
          <div className="flexRow" id="emailLink">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contactIcon"
              title="Website / Github"
            />
            <Field
              text={this.state.email}
              handleChange={this.changeState}
              id="email"
              maxLength={50}
              className="contactInfo"
            />
          </div>
          <div className="flexRow" id="phoneNumber">
            <FontAwesomeIcon
              icon={faPhone}
              className="contactIcon"
              title="Website / Github"
            />
            <Field
              text={this.state.phone}
              handleChange={this.changeState}
              id="phone"
              maxLength={15}
              className="contactInfo"
            />
          </div>
          <div className="flexRow" id="location">
            <FontAwesomeIcon
              icon={faLocationPin}
              className="contactIcon"
              title="Website / Github"
            />
            <Field
              text={this.state.location}
              handleChange={this.changeState}
              id="location"
              maxLength={50}
              className="contactInfo"
            />
          </div>
        </div>
      </div>
    );
  }
}
