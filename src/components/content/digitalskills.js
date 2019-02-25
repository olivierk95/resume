import React, {Component} from "react";

// import component
import DigitalSkillsContainer from "./contentcontainer/digitalskillscontainer";

// import style
import "../../styles/components/digitalskills.css";

// import img
import htmlLogo from "../../images/skills/htmlLogo.svg";
import cssLogo from "../../images/skills/cssLogo.svg";
import javascriptLogo from "../../images/skills/javascriptLogo.svg";
import photoshopLogo from "../../images/skills/photoshopLogo.svg";
import illustratorLogo from "../../images/skills/illustratorLogo.svg";
import sketchLogo from "../../images/skills/sketchLogo.svg";
import reactLogo from "../../images/skills/reactLogo.svg";
import laravelLogo from "../../images/skills/laravelLogo.svg";
import nodejsLogo from "../../images/skills/nodejsLogo.svg";
import sassLogo from "../../images/skills/sassLogo.svg";
import gitLogo from "../../images/skills/gitLogo.svg";

export default class DigitalSkills extends Component {
    render () {
        return (
            <div className="skills-list">
                <DigitalSkillsContainer
                    logo= {htmlLogo}
                    title="HTML"
                />
                <DigitalSkillsContainer
                    logo= {cssLogo}
                    title= "CSS"
                />
                <DigitalSkillsContainer
                    logo= {javascriptLogo}
                    title= "Javascript"
                />
                <DigitalSkillsContainer
                    logo= {photoshopLogo}
                    title= "Photoshop"
                />
                <DigitalSkillsContainer
                    logo= {illustratorLogo}
                    title= "Illustrator"
                />
                <DigitalSkillsContainer
                    logo= {sketchLogo}
                    title= "Sketch"
                />
                <DigitalSkillsContainer
                    logo= {reactLogo}
                    title= "React"
                />
                <DigitalSkillsContainer
                    logo= {laravelLogo}
                    title= "Laravel"
                />
                <DigitalSkillsContainer
                    logo= {nodejsLogo}
                    title= "Nodejs"
                />
                <DigitalSkillsContainer
                    logo= {sassLogo}
                    title= "SASS"
                />
                <DigitalSkillsContainer
                    logo= {gitLogo}
                    title= "Git"
                />
            </div>
        );
    };
}