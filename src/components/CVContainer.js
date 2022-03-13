import React, { Component } from 'react';
import '../styles/CVContainer.css';
import CVHeader from './CV-components/CVHeader';
import Education from './CV-components/Education';
import Experience from './CV-components/Experience';
import Profile from './CV-components/Profile';
import Skills from './CV-components/Skills';

export default class CVContainer extends Component {
  render() {
    return (
      <div id="cvCont">
        <div id="cvMainLeft">
          <CVHeader />
          <Skills />
          <Education />
        </div>
        <div id="cvMainRight">
          <Profile />
          <Experience />
        </div>
      </div>
    );
  }
}
