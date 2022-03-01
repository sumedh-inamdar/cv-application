import React, { Component } from 'react';
import '../styles/CVContainer.css';
import CVHeader from './CV-components/CVHeader';
import CVProfile from './CV-components/CVProfile';

export default class CVContainer extends Component {
  render() {
    return (
      <div id="cvCont">
        <CVHeader />
        <div id="cvMain">
          <div id="cvMainLeft">
            <CVProfile />
          </div>
          <div id="cvMainRight"></div>
        </div>
      </div>
    );
  }
}
