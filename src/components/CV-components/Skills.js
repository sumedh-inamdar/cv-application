import React, { Component } from 'react';
import uniqid from 'uniqid';
import AddButton from './AddButton';
import Field from './Field';
import '../../styles/CVMain.css';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      currSkill: { text: 'New Skill!', id: uniqid() }
    };
    this.changeState = this.changeState.bind(this);
    this.addSkill = this.addSkill.bind(this);
  }
  changeState(event) {
    const skillID = event.target.id.split('Input')[0];
    this.setState({
      skills: this.state.skills.map((skill) =>
        skill.id === skillID
          ? { text: event.target.value, id: skill.id }
          : skill
      )
    });
  }
  addSkill() {
    this.setState({
      skills: [...this.state.skills, this.state.currSkill],
      currSkill: { text: 'New Skill!', id: uniqid() }
    });
  }
  render() {
    const { skills } = this.state;
    return (
      <div id="cvSkills">
        <div className="sectionHeading">Skills</div>
        <hr className="sectionBreak"></hr>
        <ul className="skillsUL">
          {skills.map((skill) => (
            <li key={skill.id} className="skillLI">
              <Field
                text={skill.text}
                handleChange={this.changeState}
                id={skill.id}
                maxLength={100}
                className="cvText"
              />
            </li>
          ))}
        </ul>

        <AddButton
          clickHandler={this.addSkill}
          buttonText="Add Skill"
          className="addSkillButton"
        />
      </div>
    );
  }
}
