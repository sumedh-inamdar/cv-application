import React, { Component } from 'react';
import AddButton from './AddButton';
import uniqid from 'uniqid';
import Job from './Job';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      currJob: {
        title: 'Title',
        company: 'Company',
        startDate: 'Start Date',
        endDate: 'End Date',
        id: uniqid()
      }
    };
    this.addJob = this.addJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
  }
  addJob() {
    this.setState({
      jobs: [...this.state.jobs, this.state.currJob],
      currJob: {
        title: 'Title',
        company: 'Company',
        startDate: 'Start Date',
        endDate: 'End Date',
        tasks: [
          { name: 'Task 1', id: uniqid() },
          { name: 'Task 2', id: uniqid() },
          { name: 'Task 3', id: uniqid() }
        ],
        id: uniqid()
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
  render() {
    const { jobs } = this.state;
    return (
      <div id="cvExperience">
        <div className="sectionHeading">Experience</div>
        <hr className="sectionBreak"></hr>
        <div id="jobList">
          {jobs.map((job) => (
            <Job
              key={job.id}
              job={job}
              deleteJob={() => this.deleteJob(job.id)}
              handleChange={(event, jobProperty) =>
                this.changeState(event, job.id, jobProperty)
              }
            />
          ))}
        </div>
        <AddButton
          clickHandler={this.addJob}
          buttonText="Add Job"
          className="addJobButton"
        />
      </div>
    );
  }
}
