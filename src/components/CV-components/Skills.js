import React, { Component } from 'react';
import uniqid from 'uniqid';
import AddButton from './AddButton';
import Field from './Field';
import '../../styles/commonStyles.css';
import '../../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
      currSkill: { text: 'New Skill!', id: uniqid() }
    };
    this.changeState = this.changeState.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.toggleDeleteSkill = this.toggleDeleteSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
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
  deleteSkill(event) {
    const skillID = event.target.closest('li').id;
    this.setState({
      skills: this.state.skills.filter((skill) => skill.id != skillID)
    });
  }
  toggleDeleteSkill(event) {
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
    const { skills } = this.state;
    return (
      <div id="cvSkills">
        <div className="sectionHeading">Skills</div>
        <hr className="sectionBreak"></hr>
        <ul className="skillsUL">
          {skills.map((skill) => (
            <li
              key={skill.id}
              id={skill.id}
              onMouseEnter={this.toggleDeleteSkill}
              onMouseLeave={this.toggleDeleteSkill}
              className="skillLI">
              <div className="skillItemFlex">
                <Field
                  text={skill.text}
                  editMode="textarea"
                  handleChange={this.changeState}
                  id={skill.id}
                  maxLength={100}
                  className="cvText"
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={this.deleteSkill}
                  className="trashIcon visHidden"
                />
              </div>
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
