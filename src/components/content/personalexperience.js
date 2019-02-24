import React, { Component} from "react";

// import component
import PersonalExperienceContainer from "./contentcontainer/personalexperiencecontainer";

export default class PersonalExperience extends Component {
    render () {
        return (
            <div className="dropped-content">

                <PersonalExperienceContainer 
                    title="President"
                    organism="Youth Club of St-Hadelin, Belgium"
                    period="Sep 2018 - Now"
                />
                <PersonalExperienceContainer 
                    title="Erasmus"
                    organism="University of Concepción, Chile"
                    period="Jul 2016 – Jan 2017"
                />
                <PersonalExperienceContainer 
                    title="Treasurer"
                    organism="Youth Club of Saint-Hadelin (Olne), Belgium"
                    period="2014 - Sep 2018"
                />

            </div>
        );
    };
}
