import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  convertDateToString,
  returnDate
} from '../../utilities/helperFunctions';
import Field from './Field';
import AddButton from './AddButton';
import '../../styles/Degree.css';
import { degreeTypes } from '../../utilities/constants';

export default class Degree extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { degree, deleteDegree, handleChange } = this.props;
    return (
      <div id={degree.id} className="degreeContainer">
        <div className="degreeContainer__left">
          <div className="startRow">
            <Field
              text={convertDateToString(degree.startDate)}
              date={returnDate(degree.startDate)}
              editMode="reactCalendar"
              handleChange={(value) =>
                handleChange({ target: { value } }, 'startDate')
              }
            />
            <span className=""> to</span>
          </div>
          <div className="startRow">
            <Field
              text={convertDateToString(degree.endDate)}
              date={returnDate(degree.endDate)}
              editMode="reactCalendar"
              handleChange={(value) =>
                handleChange({ target: { value } }, 'endDate')
              }
            />
          </div>
        </div>
        <div className="degreeContainer__right">
          <div className="startRow">
            {' '}
            <Field
              text={degree.degree}
              editMode="dropdown"
              label="Degree"
              options={degreeTypes}
              handleChange={(event) => handleChange(event, 'degree')}
              className="degree__degree"
            />
            <span className=""> in </span>
            <Field
              text={degree.major}
              editMode="textarea"
              handleChange={(event) => handleChange(event, 'major')}
              className="degree__major"
            />
          </div>
          <Field
            text={degree.school}
            editMode="textarea"
            handleChange={(event) => handleChange(event, 'school')}
            className="degree__school"
          />
          <div className="degree__buttonContainer">
            <AddButton
              clickHandler={deleteDegree}
              buttonText="Delete Degree"
              className="degree__deleteJobButton"
            />
          </div>
        </div>
      </div>
    );
  }
}
Degree.propTypes = {
  degree: PropTypes.object.isRequired,
  deleteDegree: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
