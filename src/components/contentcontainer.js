import React, { Component } from "react";

// import components
import Education from "./content/education";
import WorkExperience from "./content/workexperience";
import PersonalExperience from "./content/personalexperience";
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
    };
    this.toggleEducation = this.toggleEducation.bind(this);
    this.toggleWorkExperience = this.toggleWorkExperience.bind(this);
    this.togglePersonalExperience = this.togglePersonalExperience.bind(this);
  }

  toggleEducation = () => {
    const { showEducation } = this.state;
    this.setState({
      showEducation: !showEducation,
      showWorkExperience: false,
      showPersonalExperience: false,
    })
  }

  toggleWorkExperience = () => {
    const { showWorkExperience } = this.state;
    this.setState({
      showEducation: false,
      showWorkExperience: !showWorkExperience,
      showPersonalExperience: false,
    });
  }

  togglePersonalExperience = () => {
    const { showPersonalExperience } = this.state;
    this.setState({
      showEducation: false,
      showWorkExperience: false,
      showPersonalExperience: !showPersonalExperience,
    });
  }

  render() {
    return (
        <div className="info-right">
            <div className="info-container">
                <ContentButton
                onClick={this.toggleEducation}
                title={"Education"} 
                />
                {this.state.showEducation ? <Education /> : ""}
            </div>
            <div className="info-container">
                <ContentButton
                    onClick={this.toggleWorkExperience}
                    title={"Work Experience"}
                />
                {this.state.showWorkExperience ? <WorkExperience /> : ""}
            </div>
            <div className="info-container">
                <ContentButton
                    onClick={this.togglePersonalExperience}
                    title={"Personal Experience"}
                />
                {this.state.showPersonalExperience ? <PersonalExperience /> : ""}
            </div>
        </div>
    )
  }
}

export default ContentContainer
