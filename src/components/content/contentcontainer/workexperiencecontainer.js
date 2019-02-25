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

const company = {
    fontStyle: "italic",
    fontSize: ".9rem",
    color: "#23619D",
};

const list = {
    marginLeft: "1.4rem",
}



export default class WorkExperienceContainer extends Component {
    render () {
        const listEachTask = (
            this.props.tasks.map( task => {
                return <li>{task}</li>;
            })
        );

        return (
            <div className="wrapper" style={wrapper}>
                <div className="headline" style={headline}>
                    {rectangle}
                    <p className="headtitle" style={title}><b>{this.props.title}</b></p>
                </div>
                <div className="bodylines" style={bodylines}>
                    <p className="company" style={company}>{this.props.company}</p> 
                    <p className="place">{this.props.place}</p>
                    <p className="period">{this.props.period}</p>
                    <ul style={list}>
                        {listEachTask}
                    </ul>
                </div>
            </div>
        );
    };
}
