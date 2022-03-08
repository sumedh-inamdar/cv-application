import React, { Component } from 'react';
import uniqid from 'uniqid';
import AddButton from './AddButton';
import Degree from './Degree';

export default class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degrees: [],
      currDegree: {
        startDate: 'Start Date',
        endDate: 'End Date',
        school: 'School / Institution',
        major: 'Major / Field of Study',
        degree: 'Degree',
        id: uniqid()
      }
    };
    this.addDegree = this.addDegree.bind(this);
    this.deleteDegree = this.deleteDegree.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  addDegree() {
    this.setState({
      degrees: [...this.state.degrees, this.state.currDegree],
      currDegree: {
        startDate: 'Start Date',
        endDate: 'End Date',
        school: 'School / Institution',
        major: 'Major / Field of Study',
        degree: '(BS, MS, PhD...)',
        id: uniqid()
      }
    });
  }
  deleteDegree(degreeID) {
    this.setState({
      degrees: this.state.degrees.filter((degree) => degree.id !== degreeID)
    });
  }
  changeState(event, degreeID, degreeProp) {
    this.setState({
      degrees: this.state.degrees.map((degree) =>
        degree.id === degreeID
          ? { ...degree, [degreeProp]: event.target.value }
          : degree
      )
    });
  }
  render() {
    return (
      <div id="cvEducation">
        <div className="sectionHeading">Education</div>
        <hr className="sectionBreak"></hr>
        <div id="degreeList">
          {this.state.degrees.map((degree) => (
            <Degree
              key={degree.id}
              degree={degree}
              deleteDegree={() => this.deleteDegree(degree.id)}
              handleChange={(event, degreeProperty) =>
                this.changeState(event, degree.id, degreeProperty)
              }
            />
          ))}
        </div>
        <AddButton
          clickHandler={this.addDegree}
          buttonText="Add Degree"
          className="addDegreeButton"
        />
      </div>
    );
  }
}
