import React, { Component} from "react";

// import img
import rectangle from "../../../images/rectangle";

// style

const wrapper = {
    display: "flex",
    flexDirection: "column",
    margin: ".2rem 0 .2rem .5rem"
};

const headline = {
    display: "flex",
};

const title = {
    paddingLeft: ".5rem",
    fontSize: ".95rem",
}

const bodylines = {
    paddingLeft: "1rem",
}

const organism = {
    fontStyle: "italic",
    fontSize: ".9rem",
};

export default class WorkExperienceContainer extends Component {
    render () {
        return (
            <div className="wrapper" style={wrapper}>
                <div className="headline" style={headline}>
                    {rectangle}
                    <p className="headtitle" style={title}><b>{this.props.title}</b></p>
                </div>
                <div className="bodylines" style={bodylines}>
                    <p className="organism" style={organism}>{this.props.organism}</p> 
                    <p className="period">{this.props.period}</p>
                </div>
            </div>
        );
    };
}
