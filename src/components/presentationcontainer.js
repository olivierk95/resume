import React from "react";

//import style
import "../styles/components/presentationcontainer.css";

const PresentationContainer = () => (
    <div className="info-left appear-slowly">
        <div className="title">
            <h1>&nbsp;Junior Developer - Front end & Back end &nbsp;</h1>
        </div>

        <div className="introduction">
            <h5>
                Passionate about <b>entrepreneurship</b>, <b>creativity</b> and{" "}
                <b>digitality</b>, always optimist, nature and diversity lover,
                change-enthusiast, dedicated and motivated volunteer,
                marketer (with Master!), flexible and eager to learn from others.
            </h5>
            <br />
            <h5>
                I am currently <b>looking for an internship</b> of 2-3 months (beginning of May) where I would improve my coding skills and where my creativity would be challenged.
            </h5>
            <br />
           
        </div>
        <div className="quotation">
                <blockquote>"Be the change you want to see in the world."</blockquote>
                <cite>- Gandhi </cite>
        </div>
    </div>
);

export default PresentationContainer;