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
    : [{ name: 'List duties / achievements', id: uniqid() }];
}

export default class Job extends Component {
  constructor(props) {
    super(props);
    const data = exampleData.Experience.jobs;
    this.state = {
      tasks: getTasks(data, this.props.job.id),
      currTask: { name: 'List duties / achievements', id: uniqid() }
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  addTask() {
    this.setState({
      tasks: [...this.state.tasks, this.state.currTask],
      currTask: { name: 'List duties / achievements', id: uniqid() }
    });
  }
  changeState(event, taskID) {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === taskID ? { name: event.target.value, id: task.id } : task
      )
    });
  }
  deleteTask(event) {
    const taskID = event.target.closest('li').id;
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
    const { job, deleteJob, handleChange } = this.props;
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
            />
            <span className=""> to</span>
          </div>
          <div className="startRow">
            <Field
              text={convertDateToString(job.endDate)}
              date={returnDate(job.endDate)}
              editMode="reactCalendar"
              handleChange={(value) =>
                handleChange({ target: { value } }, 'endDate')
              }
            />
          </div>
        </div>
        <div className="jobContainer__right cvText">
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
                    maxLength={100}
                    className="cvText"
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={this.deleteTask}
                    className="trashIcon visHidden"
                  />
                </div>
              </li>
            ))}
          </ul>
          {/* add container div and add button to delete job */}
          <div className="job__buttonContainer">
            <AddButton
              clickHandler={this.addTask}
              buttonText="Add duty / achievement"
              className="job__addTaskButton"
            />
            <AddButton
              clickHandler={deleteJob}
              buttonText="Delete Job"
              className="job__deleteJobButton"
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
  handleChange: PropTypes.func.isRequired
};
