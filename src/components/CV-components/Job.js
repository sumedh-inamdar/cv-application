import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddButton from './AddButton';
import Field from './Field';
import '../../styles/commonStyles.css';
import '../../styles/Job.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';
import {
  convertDateToString,
  returnDate
} from '../../utilities/helperFunctions';
import { exampleData } from '../../utilities/constants';

function getTasks(dataArray, jobID) {
  const targetJob = dataArray.find(({ id }) => id === jobID);
  return targetJob
    ? targetJob.duties.map((task) => ({ name: task, id: uniqid() }))
    : [{ name: 'List responsibility', id: uniqid() }];
}

export default class Job extends Component {
  constructor(props) {
    super(props);
    const data = exampleData.Experience.jobs;
    this.state = {
      tasks: getTasks(data, this.props.job.id),
      currTask: { name: 'List responsibility', id: uniqid() }
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addTask() {
    this.setState({
      tasks: [...this.state.tasks, this.state.currTask],
      currTask: { name: 'List responsibility', id: uniqid() }
    });
  }
  changeState(event, taskID) {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === taskID ? { name: event.target.value, id: task.id } : task
      )
    });
  }
  deleteTask(taskID) {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id != taskID)
    });
  }
  toggleDeleteTask(event) {
    const trashElement = event.target.closest('li').querySelector('.trashIcon');

    const isValidMouseEnter =
      event.type === 'mouseenter' &&
      trashElement.classList.contains('visHidden');

    const isValidMouseLeave =
      event.type === 'mouseleave' &&
      !trashElement.classList.contains('visHidden');

    if (isValidMouseEnter || isValidMouseLeave) {
      trashElement.classList.toggle('visHidden');
    }
  }
  render() {
    const { job, deleteJob, handleChange, markCurrent } = this.props;
    return (
      <div id={job.id} className="jobContainer">
        <div className="jobContainer__left">
          <div className="startRow">
            <Field
              text={convertDateToString(job.startDate)}
              date={returnDate(job.startDate)}
              editMode="reactCalendar"
              handleChange={(value) =>
                handleChange({ target: { value } }, 'startDate')
              }
              maxDate={returnDate(job.endDate)}
              className="job__startDate"
            />
            <span className=""> to</span>
          </div>
          <div className="startRow">
            {job.current ? (
              <Field
                text="Current"
                editMode="display"
                className="currentDisplay"
              />
            ) : (
              <Field
                text={convertDateToString(job.endDate)}
                date={returnDate(job.endDate)}
                editMode="reactCalendar"
                handleChange={(value) =>
                  handleChange({ target: { value } }, 'endDate')
                }
                minDate={
                  job.startDate instanceof Date ? job.startDate : undefined
                }
                maxDate={new Date()}
                className="job__endDate"
              />
            )}
          </div>
          <div className="startRow currentRow editElement">
            <input
              type="checkbox"
              id={job.id + '__checkbox'}
              className="currentCheckbox"
              name="current"
              onChange={markCurrent}
              checked={job.current}
            />
            <label htmlFor={job.id + '__checkbox'}>I currently work here</label>
          </div>
        </div>
        <div className="jobContainer__right cvText">
          <Field
            text={job.title}
            editMode="textarea"
            handleChange={(event) => handleChange(event, 'title')}
            className="job__title"
            maxLength={50}
            cols={25}
            rows={1}
            placeholder="Job title"
          />
          <Field
            text={job.company}
            editMode="textarea"
            handleChange={(event) => handleChange(event, 'company')}
            className="job__company"
            maxLength={50}
            cols={25}
            rows={1}
            placeholder="Company"
          />
          <ul className="tasksUL">
            {this.state.tasks.map((task) => (
              <li
                key={task.id}
                onMouseEnter={this.toggleDeleteTask}
                onMouseLeave={this.toggleDeleteTask}
                className="taskLI">
                <div className="taskItemFlex">
                  <Field
                    text={task.name}
                    editMode="textarea"
                    handleChange={(event) => this.changeState(event, task.id)}
                    maxLength={200}
                    className="cvText"
                    cols={37}
                    rows={3}
                    placeholder="Responsibility / Duty"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => this.deleteTask(task.id)}
                    className="trashIcon visHidden"
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="buttonContainer">
            <AddButton
              clickHandler={this.addTask}
              buttonText="Add responsibility"
              className="cvEditButton editElement"
            />
            <AddButton
              clickHandler={deleteJob}
              buttonText="Remove Job"
              className="cvEditButton editElement"
            />
          </div>
        </div>
      </div>
    );
  }
}
Job.propTypes = {
  job: PropTypes.object.isRequired,
  deleteJob: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  markCurrent: PropTypes.func
};
