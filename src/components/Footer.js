import React, { Component } from 'react';
import octocat from '../assets/Octocat.png';
import '../styles/Footer.css';

function getYear() {
  return new Date().getFullYear();
}

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <small>&copy; Copyright {getYear()}, sumedh-inamdar</small>
        <a
          href="https://github.com/sumedh-inamdar/cv-application"
          target="_blank"
          rel="noreferrer"
          title="Link to Github Repo">
          <input type="image" alt="Github" src={octocat} />
        </a>
      </footer>
    );
  }
}
