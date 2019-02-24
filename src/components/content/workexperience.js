import React, { Component} from "react";

// import component
import WorkExperienceContainer from "./contentcontainer/workexperiencecontainer";

export default class WorkExperience extends Component {
    render () {
        return (
            <div className="dropped-content">

                <WorkExperienceContainer 
                    title="Internee as an International Representative (Explort)"
                    company="The Clay and Paint Factory"
                    place="One month in Belgium, two months in Chile"
                    period="Feb-Apr 2018"
                    tasks={[
                        "Participated at events and fairs.",
                        "Met B2B and B2C customers to sale the products.",
                        "Designed visuals for online communication and products marketing.",
                    ]}
                />
                <WorkExperienceContainer 
                    title="Graphic Designer (student job)"
                    company="Mathy by Bols"
                    place="Liège, Belgium"
                    period="Jan 2018"
                    tasks={[
                        "Imagined a new communication strategy.",
                        "Created visuals for social medias and web presence.",
                    ]}
                />
                <WorkExperienceContainer 
                    title="Volunteer"
                    company="Planetary Health Institute"
                    place="Mooinooi, South Africa"
                    period="Jul 2017"
                    tasks={[
                        "Created visuals.",
                        "Performed agriculture work (plantation, harvest, etc.).",
                    ]}
                />
                <WorkExperienceContainer 
                    title="Multimedia vendor (student job)"
                    company="Carrefour"
                    place="Liège, Belgium"
                    period="Jun-Aug 2014"
                    tasks={[
                        "Arranged the shelves and stocks and controlled the prices.",
                        "Dealt with customer’s requests and helped them.",
                    ]}
                />

            </div>
        );
    };
}
