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
    const { degree, deleteDegree, handleChange, markCurrent } = this.props;

    return (
      <div id={degree.id} className="degreeContainer">
        <div className="startRow">
          <Field
            text={degree.degree}
            editMode="dropdown"
            label="Degree"
            options={degreeTypes}
            handleChange={(event) => handleChange(event, 'degree')}
            className="degree__degree"
          />
          {degree.degree !== 'High School Diploma' && (
            <Field
              text={degree.major}
              editMode="textarea"
              handleChange={(event) => handleChange(event, 'major')}
              className="degree__major"
              maxLength={40}
              cols={17}
              rows={1}
              placeholder="Major / Field of Study"
            />
          )}
        </div>
        <Field
          text={degree.school}
          editMode="textarea"
          handleChange={(event) => handleChange(event, 'school')}
          className="degree__school"
          maxLength={75}
          cols={22}
          rows={1}
          placeholder="School / Institution"
        />
        <div className="startRow">
          <Field
            text={convertDateToString(degree.startDate)}
            date={returnDate(degree.startDate)}
            editMode="reactCalendar"
            handleChange={(value) =>
              handleChange({ target: { value } }, 'startDate')
            }
            maxDate={returnDate(degree.endDate)}
            className="degree__startDate"
          />
          <span className="degree__to"> to</span>
          {degree.current ? (
            <Field
              text="Current"
              editMode="display"
              className="currentDisplay"
            />
          ) : (
            <Field
              text={convertDateToString(degree.endDate)}
              date={returnDate(degree.endDate)}
              editMode="reactCalendar"
              handleChange={(value) =>
                handleChange({ target: { value } }, 'endDate')
              }
              minDate={
                degree.startDate instanceof Date ? degree.startDate : undefined
              }
              maxDate={new Date()}
              className="degree__endDate"
            />
          )}
        </div>
        <div className="startRow currentRow editElement">
          <input
            type="checkbox"
            id={degree.id + '__checkbox'}
            className="currentCheckbox"
            name="current"
            onChange={markCurrent}
            checked={degree.current}
          />
          <label htmlFor={degree.id + '__checkbox'}>
            I currently work here
          </label>
        </div>
        <div className="buttonContainer">
          <AddButton
            clickHandler={deleteDegree}
            buttonText="Remove Degree"
            className="cvEditButton editElement"
          />
        </div>
      </div>
    );
  }
}
Degree.propTypes = {
  degree: PropTypes.object.isRequired,
  deleteDegree: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  markCurrent: PropTypes.func.isRequired
};
