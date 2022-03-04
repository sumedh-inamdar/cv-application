import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import Field from './Field';
import '../../styles/Job.css';

export default class Job extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { job, addTask, handleChange } = this.props;
    return (
      <div id={job.id} className="jobContainer">
        <Field
          text={job.title}
          editMode="textarea"
          handleChange={(event) => handleChange(event, 'title')}
          className="job__title"
        />
        <Field
          text={job.company}
          editMode="textarea"
          handleChange={(event) => handleChange(event, 'company')}
          className="job__company"
        />
        <Field
          text={job.startMonth}
          year={job.startYear}
          editMode="monthDropdown"
          handleChange={(event) => handleChange(event, 'startMonth')}
          className="job__startMonth"
        />
        <Field
          text={job.startYear}
          editMode="yearDropdown"
          handleChange={(event) => handleChange(event, 'startYear')}
          className="job__startYear"
        />
        <AddButton
          clickHandler={addTask}
          buttonText="Add Task"
          className="addTaskButton"
        />
      </div>
    );
  }
}
Job.propTypes = {
  job: PropTypes.object.isRequired,
  addTask: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
