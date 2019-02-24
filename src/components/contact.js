import React, { Component } from "react";

//import img
import instagramLogo from "../images/instagram";
import githubLogo from "../images/github";
import linkedinLogo from "../images/linkedin";

//import style
import "../styles/components/box.css";

export default class Contact extends Component {
    render () {
        return (
            <div className="box-contact box">
                
                <p className="infos"><b>{"Mail:"}</b>{" keutgensolivier@gmail.com"}</p>
                <p className="infos"><b>{"Phone:"}</b>{" +32-471-831-087"}</p>
                <p className="infos"><b>{"Birth:"}</b>{" 03-07-1995 in Liège"}</p>
                <p className="infos"><b>{"Address:"}</b>{" Voie Pirson 9A, 4877 OLNE, Belgium"}</p>
                
                <div class="links">
                    <a href="https://www.linkedin.com/in/olivier-keutgens-393b0710b/" target="_blank">
                        {linkedinLogo} 
                    </a>
                    <a href="https://www.instagram.com/organik.artist/" target="_blank">
                        {instagramLogo}
                    </a>
                    <a href="https://github.com/olivierk95" target="_blank">
                        {githubLogo}
                    </a>
                </div>

            </div>
        );
    };
}
