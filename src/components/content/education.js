import React, { Component } from "react";

// import components
import EducationContainer from "./contentcontainer/educationcontainer";

export default class Education extends Component {
    render () {
        return (
            <div className="dropped-content">

                <EducationContainer 
                    title="Web developer training"
                    institution="BeCode"
                    place="Liège, Belgium"
                    period="2018 – Now"
                />
                <EducationContainer 
                    title="Master in Marketing and Strategic Intelligence"
                    institution="University of Liège - HEC"
                    place="Liège, Belgium"
                    period="2016 – 2018"
                />
                <EducationContainer 
                    title="Bachelor in Economics and Management"
                    institution="University of Liège - HEC"
                    place="Liège, Belgium"
                    period="2013 – 2016"
                />
                <EducationContainer 
                    title="Secondary Studies"
                    institution="Collège Royal Marie-Thérèse"
                    place="Herve, Belgium"
                    period="2007 – 2013"
                />

            </div>
        );
    };
}
