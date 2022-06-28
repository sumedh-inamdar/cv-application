import React, { Component } from 'react';
import uniqid from 'uniqid';
import Job from './Job';
import { exampleData } from '../../utilities/constants';
import '../../styles/Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

function getLocalStorageJobs(array) {
  return array?.map((job) => ({
    ...job,
    startDate: Date.parse(job.startDate)
      ? new Date(job.startDate)
      : job.startDate,
    endDate: Date.parse(job.endDate) ? new Date(job.endDate) : job.endDate
  }));
}

export default class Experience extends Component {
  constructor(props) {
    super(props);
    const data = exampleData.Experience;
    this.state = {
      jobs:
        getLocalStorageJobs(JSON.parse(localStorage.getItem('experience'))) ||
        data.jobs.map((job) => ({
          title: job.title,
          company: job.company,
          startDate: job.startDate,
          endDate: job.endDate,
          id: job.id,
          current: job.current
        })),
      currJob: {
        title: 'Title',
        company: 'Company',
        startDate: 'Start Date',
        endDate: 'End Date',
        id: uniqid(),
        current: false
      }
    };
    this.addJob = this.addJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.toggleCurrent = this.toggleCurrent.bind(this);
    this.changeState = this.changeState.bind(this);
    localStorage.setItem('experience', JSON.stringify(this.state.jobs));
  }
  componentDidUpdate() {
    localStorage.setItem('experience', JSON.stringify(this.state.jobs));
  }
  addJob() {
    this.setState({
      jobs: [...this.state.jobs, this.state.currJob],
      currJob: {
        title: 'Title',
        company: 'Company',
        startDate: 'Start Date',
        endDate: 'End Date',
        id: uniqid(),
        current: false
      }
    });
  }
  deleteJob(jobID) {
    this.setState({
      jobs: this.state.jobs.filter((job) => job.id !== jobID)
    });
  }
  changeState(event, jobID, jobProperty) {
    this.setState({
      jobs: this.state.jobs.map((job) =>
        job.id === jobID
          ? {
              ...job,
              [jobProperty]: event.target.value
            }
          : job
      )
    });
  }
  toggleCurrent(jobID) {
    this.setState({
      jobs: this.state.jobs.map((job) =>
        job.id === jobID ? { ...job, current: !job.current } : job
      )
    });
  }
  render() {
    const { jobs } = this.state;
    return (
      <div id="cvExperience">
        <div className="sectionHeading">
          <div>Experience</div>
          <FontAwesomeIcon
            icon={faAdd}
            onClick={this.addJob}
            className="addIcon editElement"
          />
        </div>
        <div id="jobList">
          {jobs.map((job) => (
            <Job
              key={job.id}
              job={job}
              deleteJob={() => this.deleteJob(job.id)}
              handleChange={(event, jobProperty) =>
                this.changeState(event, job.id, jobProperty)
              }
              markCurrent={() => this.toggleCurrent(job.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
