import React, { Component } from 'react';
import uniqid from 'uniqid';
// import AddButton from './AddButton';
import Field from './Field';
import '../../styles/commonStyles.css';
import '../../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';
import { exampleData } from '../../utilities/constants';

export default class Skills extends Component {
  constructor(props) {
    super(props);
    const data = exampleData.Skills;
    this.state = {
      skills: data.skills.map((skill) => ({ text: skill, id: uniqid() })),
      currSkill: { text: 'New Skill!', id: uniqid() }
    };
    this.changeState = this.changeState.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.toggleDeleteSkill = this.toggleDeleteSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
  }
  componentDidUpdate() {
    localStorage.setItem(
      'skills',
      JSON.stringify(this.state.skills.map((skill) => skill.text))
    );
  }
  changeState(event, skillID) {
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
  deleteSkill(skillID) {
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
        <div className="sectionHeading">
          <div>Skills</div>
          <FontAwesomeIcon
            icon={faAdd}
            onClick={this.addSkill}
            className="addIcon editElement"
          />
        </div>
        <ul className="skillsUL">
          {skills.map((skill) => (
            <li
              key={skill.id}
              onMouseEnter={this.toggleDeleteSkill}
              onMouseLeave={this.toggleDeleteSkill}
              className="skillLI">
              <div className="skillItemFlex">
                <Field
                  text={skill.text}
                  editMode="textarea"
                  handleChange={(event) => this.changeState(event, skill.id)}
                  maxLength={100}
                  className="cvText"
                  cols={19}
                  rows={1}
                  placeholder="Enter Skill"
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => this.deleteSkill(skill.id)}
                  className="trashIcon visHidden"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
