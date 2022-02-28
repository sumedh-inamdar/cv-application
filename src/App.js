import React, { Component } from 'react';
import CVContainer from './components/CVContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import ReactToPrint from 'react-to-print';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <CVContainer ref={(el) => (this.componentRef = el)} />
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => {
            return <button>Print this out</button>;
          }}
        />
        <Footer />
      </div>
    );
  }
}
