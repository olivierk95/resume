import React, { Component } from "react";

// import doc
import resume from "../documents/resume.jpg";

// import img
import downloadButton from "../images/download-button.svg";

// import style
import "../styles/components/box.css";

export default class Download extends Component {
    render() {
        return (
            <div className="box-download box appear-slowly">
                <a href={resume} download="resume.jpg">
                    <img src={downloadButton} className="download-icon" />
                    <div className="download-text">
                        <h4>{"Download"}</h4>
                        <p className="resume-pdf">{"my resume in pdf"}</p>
                    </div>
                </a>
            </div>
        );
    };
}