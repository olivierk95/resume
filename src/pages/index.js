import React, { Component } from "react"

// import Image from "../components/image"
import hairImg from "../images/profile_picture_destroyed_hair.png"
import eyesImg from "../images/profile_picture_destroyed_eyes.png"
import noseImg from "../images/profile_picture_destroyed_nose.png"
import mouthImg from "../images/profile_picture_destroyed_mouth.png"
import shadowImg from "../images/profile_picture_destroyed_shadow.png"
import arrowImg from "../images/keyboard-right-arrow-button.svg";

// import components
import SEO from "../components/seo"
import Education from "../components/content/education";
import WorkExperience from "../components/content/workexperience";
import PersonalExperience from "../components/content/personalexperience";

// import styles
import "../styles/main.scss"

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEducation: false,
      showWorkExperience: false,
      showPersonalExperience: false,
    };
    this.toggleEducation = this.toggleEducation.bind(this);
    this.toggleWorkExperience = this.toggleWorkExperience.bind(this);
    this.togglePersonalExperience = this.togglePersonalExperience.bind(this);
  };

  toggleEducation = () => {
    const { showEducation } = this.state;
    this.setState({ 
      showEducation: !showEducation,
      showWorkExperience: false,
      showPersonalExperience: false,
    });
  };

  toggleWorkExperience = () => {
    const { showWorkExperience } = this.state;
    this.setState({
      showEducation: false,
      showWorkExperience: !showWorkExperience,
      showPersonalExperience: false,
    });
  };

  togglePersonalExperience = () => {
    const { showPersonalExperience } = this.state;
    this.setState({
      showEducation: false,
      showWorkExperience: false,
      showPersonalExperience: !showPersonalExperience,
    });
  };

  render () {
    return (
      <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <body>
          <header>
            <div className="typewriter">
              <h1>Hello, I am Olivier Keutgens!</h1>
            </div>
            <div className="secondtypewriter">
              <h2 className="typewriter">
                ... and this my <span>resume.</span>
              </h2>
              <h2 className="end">&nbsp;head.</h2>
            </div>
          </header>

          <div className="content">
            <div className="info-left">
              <div className="title">
                <h1>&nbsp;Junior Developer - Front end & Back end &nbsp;</h1>
              </div>

              <div className="introduction">
                <h5>
                  Passionate about <b>entrepreneurship</b>, <b>creativity</b> and{" "}
                  <b>digitality</b>, always optimist, nature and diversity lover,
                  change-enthusiast, backpacker, dedicated and motivated volunteer,
                  marketer (with Master!), flexible and eager to learn from others.
                  I aimed at improving the world we are living in by putting my
                  skills at the service of projects that make sense to me.
                </h5>
              </div>
            </div>

            <div className="profile-picture">
              <img src={hairImg} id="hair" />
              <img src={eyesImg} id="eyes" />
              <img src={noseImg} id="nose" />
              <img src={mouthImg} id="mouth" />
              <img src={shadowImg} id="shadow" />
            </div>

            <div className="info-right">
              <div className="info-container">
                <button className="dropdown-button" onClick={this.toggleEducation}>
                  <img src={arrowImg} className="right-arrow" alt="dropdown education"/>
                  <h3>Education</h3>
                </button>
                {this.state.showEducation? <Education /> : ""}
              </div>

              <div className="info-container">
                <button className="dropdown-button" onClick={this.toggleWorkExperience}>
                <img src={arrowImg} className="right-arrow" alt="dropdown work experience"/>
                  <h3>Work Experience</h3>
                </button>
                {this.state.showWorkExperience? <WorkExperience /> : ""}    
              </div>

              <div className="info-container">
                <button className="dropdown-button" onClick={this.togglePersonalExperience}>
                  <img src={arrowImg} className="right-arrow" alt="dropdown personal experience"/>
                  <h3>Personal Experience</h3>
                </button>
                {this.state.showPersonalExperience? <PersonalExperience /> : ""}         
              </div>
            </div>
          </div>
          {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div> */}
        </body>
      </>
    );
  }
}

export default IndexPage
