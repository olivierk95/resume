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
            <div className="box-download box">
                <a href={resume} download="resume.jpg">
                    <img href={downloadButton} className="download-icon" /><h3>{"Download in pdf"}</h3>
                </a>
            </div>
        );
    };
}