import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import Field from './Field';

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
          handleChange={(event) => handleChange(event, 'title')}
        />
        <Field
          text={job.company}
          handleChange={(event) => handleChange(event, 'company')}
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
