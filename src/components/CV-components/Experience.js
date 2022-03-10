import React, { Component } from 'react';
import AddButton from './AddButton';
import uniqid from 'uniqid';
import Job from './Job';
import { exampleData } from '../../utilities/constants';

export default class Experience extends Component {
  constructor(props) {
    super(props);
    const data = exampleData.Experience;
    this.state = {
      jobs: data.jobs.map((job) => ({
        title: job.title,
        company: job.company,
        startDate: job.startDate,
        endDate: job.endDate,
        id: job.id
      })),
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
