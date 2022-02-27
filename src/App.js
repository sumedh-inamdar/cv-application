import React, { Component } from 'react';
import CVContainer from './components/CVContainer';
import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CVContainer />
        <Footer />
      </div>
    );
  }
}
