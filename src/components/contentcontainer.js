import React, { Component } from "react";

// import components
import Education from "./content/education";
import WorkExperience from "./content/workexperience";
import PersonalExperience from "./content/personalexperience";
import DigitalSkills from "./content/digitalskills";
import Interests from "./content/interests";
import ContentButton from "./buttons/contentbutton";

// import style
import "../styles/components/contentcontainer.css"

class ContentContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEducation: false,
      showWorkExperience: false,
      showPersonalExperience: false,
      showDigitalSkills: false,
      showInterests: false,
    };
    this.toggleEducation = this.toggleEducation.bind(this);
    this.toggleWorkExperience = this.toggleWorkExperience.bind(this);
    this.togglePersonalExperience = this.togglePersonalExperience.bind(this);
    this.toggleDigitalSkills = this.toggleDigitalSkills.bind(this);
    this.toggleInterests = this.toggleInterests.bind(this);

  }

  toggleEducation = () => {
    const { showEducation } = this.state;
    this.setState({
      showEducation: !showEducation,
      showWorkExperience: false,
      showPersonalExperience: false,
      showDigitalSkills: false,
      showInterests: false,
    })
  }

  toggleWorkExperience = () => {
    const { showWorkExperience } = this.state;
    this.setState({
      showEducation: false,
      showWorkExperience: !showWorkExperience,
      showPersonalExperience: false,
      showDigitalSkills: false,
      showInterests: false,
    });
  }

  togglePersonalExperience = () => {
    const { showPersonalExperience } = this.state;
    this.setState({
      showEducation: false,
      showWorkExperience: false,
      showPersonalExperience: !showPersonalExperience,
      showDigitalSkills: false,
      showInterests: false,
    });
  }

  toggleDigitalSkills = () => {
    const { showDigitalSkills } = this.state;
    this.setState({
      showEducation: false,
      showWorkExperience: false,
      showPersonalExperience: false, 
      showDigitalSkills: !showDigitalSkills,
      showInterests: false,
    });
  }

  toggleInterests = () => {
    const { showInterests } = this.state;
    this.setState({
      showEducation: false,
      showWorkExperience: false,
      showPersonalExperience: false,
      showDigitalSkills: false,
      showInterests: !showInterests,
    });
  }

  render() {
    return (
        <div className="info-right appear-slowly">
            <div className="info-container">
                <ContentButton
                  onClick={this.toggleEducation}
                  title={"Education"} 
                  toggle={this.state.showEducation}
                />
                {this.state.showEducation ? <Education /> : ""}
            </div>
            <div className="info-container">
                <ContentButton
                    onClick={this.toggleWorkExperience}
                    title={"Work Experience"}
                    toggle={this.state.showWorkExperience}
                />
                {this.state.showWorkExperience ? <WorkExperience /> : ""}
            </div>
            <div className="info-container">
                <ContentButton
                    onClick={this.togglePersonalExperience}
                    title={"Personal Experience"}
                    toggle={this.state.showPersonalExperience}
                />
                {this.state.showPersonalExperience ? <PersonalExperience /> : ""}
            </div>
            <div className="skills-container">
                <ContentButton
                    onClick={this.toggleDigitalSkills}
                    title={"Digital Skills"}
                    toggle={this.state.showDigitalSkills}
                />
                {this.state.showDigitalSkills ? <DigitalSkills /> : ""}
            </div>
            <div className="info-container">
                <ContentButton
                    onClick={this.toggleInterests}
                    title={"Interests"}
                    toggle={this.state.showInterests}
                />
                {this.state.showInterests ? <Interests /> : ""}
            </div>
        </div>
    )
  }
}

export default ContentContainer
