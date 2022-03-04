import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import Field from './Field';
import '../../styles/commonStyles.css';
import '../../styles/Job.css';

export default class Job extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { job, addTask, handleChange } = this.props;
    return (
      <div id={job.id} className="jobContainer">
        <div className="jobContainer__left">
          <div className="startRow">
            <Field
              text={job.startMonth}
              year={job.startYear}
              editMode="monthDropdown"
              handleChange={(event) => handleChange(event, 'startMonth')}
              className="job__startMonth cvText"
            />
            <Field
              text={job.startYear}
              editMode="yearDropdown"
              handleChange={(event) => handleChange(event, 'startYear')}
              className="job__startYear cvText"
            />
            <span className="cvText"> to</span>
          </div>
          <div className="startRow">
            <Field
              text={job.endMonth}
              year={job.endYear}
              editMode="monthDropdown"
              handleChange={(event) => handleChange(event, 'endMonth')}
              className="job__endMonth cvText"
            />
            <Field
              text={job.endYear}
              editMode="yearDropdown"
              handleChange={(event) => handleChange(event, 'endYear')}
              className="job__endYear cvText"
            />
          </div>
        </div>
        <div className="jobContainer__right cvText">
          <Field
            text={job.title}
            editMode="textarea"
            handleChange={(event) => handleChange(event, 'title')}
            className="job__title cvText"
          />
          <Field
            text={job.company}
            editMode="textarea"
            handleChange={(event) => handleChange(event, 'company')}
            className="job__company cvText"
          />

          <AddButton
            clickHandler={addTask}
            buttonText="Add Task"
            className="addTaskButton"
          />
        </div>
      </div>
    );
  }
}
Job.propTypes = {
  job: PropTypes.object.isRequired,
  addTask: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
