import React, { Component } from 'react';
import '../styles/CVContainer.css';
import CVHeader from './CVHeader';

export default class CVContainer extends Component {
  render() {
    return (
      <div id="cvCont">
        <CVHeader />
        <div id="cvMain">
          <div id="cvMainLeft"></div>
          <div id="cvMainRight"></div>
        </div>
      </div>
    );
  }
}
