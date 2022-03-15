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
        <p className="instructions">
          Instructions: Click on any editable text field (highlighted in gold)
          and export to PDF when ready.
        </p>
        <ReactToPrint
          content={() => this.componentRef}
          trigger={() => {
            return <button id="pdfExportButton">Export to PDF</button>;
          }}
          onBeforeGetContent={() => {
            const editElements = document.querySelectorAll('.editElement');
            for (const element of editElements) {
              element.classList.add('noDisplay');
            }
          }}
          onAfterPrint={() => {
            const editElements = document.querySelectorAll('.editElement');
            for (const element of editElements) {
              element.classList.remove('noDisplay');
            }
          }}
        />
        <CVContainer ref={(el) => (this.componentRef = el)} />
        <Footer />
      </div>
    );
  }
}
