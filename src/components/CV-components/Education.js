import React, { Component } from 'react';
import uniqid from 'uniqid';
import Degree from './Degree';
import '../../styles/Education.css';
import { exampleData } from '../../utilities/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

export default class Education extends Component {
  constructor(props) {
    super(props);
    const data = exampleData.Education.degrees;
    this.state = {
      degrees: data.map((degree) => ({
        startDate: degree.startDate,
        endDate: degree.endDate,
        school: degree.school,
        major: degree.major,
        degree: degree.degree,
        id: degree.id,
        current: degree.current
      })),
      currDegree: {
        startDate: 'Start Date',
        endDate: 'End Date',
        school: 'School / Institution',
        major: 'Major / Field of Study',
        degree: 'Degree',
        id: uniqid(),
        current: false
      }
    };
    this.addDegree = this.addDegree.bind(this);
    this.deleteDegree = this.deleteDegree.bind(this);
    this.changeState = this.changeState.bind(this);
    this.toggleCurrent = this.toggleCurrent.bind(this);
  }
  addDegree() {
    this.setState({
      degrees: [...this.state.degrees, this.state.currDegree],
      currDegree: {
        startDate: 'Start Date',
        endDate: 'End Date',
        school: 'School / Institution',
        major: 'Major / Field of Study',
        degree: 'Degree',
        id: uniqid(),
        current: false
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
  toggleCurrent(degreeID) {
    this.setState({
      degrees: this.state.degrees.map((degree) =>
        degree.id === degreeID
          ? { ...degree, current: !degree.current }
          : degree
      )
    });
  }
  render() {
    return (
      <div id="cvEducation">
        <div className="sectionHeading">
          <div>Education</div>
          <FontAwesomeIcon
            icon={faAdd}
            onClick={this.addDegree}
            className="addIcon editElement"
          />{' '}
        </div>
        <div id="degreeList">
          {this.state.degrees.map((degree) => (
            <Degree
              key={degree.id}
              degree={degree}
              deleteDegree={() => this.deleteDegree(degree.id)}
              handleChange={(event, degreeProperty) =>
                this.changeState(event, degree.id, degreeProperty)
              }
              markCurrent={() => this.toggleCurrent(degree.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
