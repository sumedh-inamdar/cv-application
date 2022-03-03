import React, { Component } from 'react';
import '../styles/CVContainer.css';
import CVHeader from './CV-components/CVHeader';
import Experience from './CV-components/Experience';
import Profile from './CV-components/Profile';
import Skills from './CV-components/Skills';

export default class CVContainer extends Component {
  render() {
    return (
      <div id="cvCont">
        <CVHeader />
        <div id="cvMain">
          <div id="cvMainLeft">
            <Profile />
            <Skills />
          </div>
          <div id="cvMainRight">
            <Experience />
          </div>
        </div>
      </div>
    );
  }
}
