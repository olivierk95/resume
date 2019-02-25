import React, {Component} from "react";

export default class DigitalSkillsContainer extends Component {
    render () {
        return (
            <div class="digital-skill">
                <img src={this.props.logo} className="digital-logo"/>
                <p>{this.props.title}</p>
            </div>
        );
    };
}
