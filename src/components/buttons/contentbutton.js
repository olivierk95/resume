import React, { Component } from "react";

// import image
import arrowImg from "../../images/keyboard-right-arrow-button.svg";

class ContentButton extends Component {
    render () {
        return (
            <button className="dropdown-button" onClick={this.props.onClick}>
                <img src={arrowImg} className="right-arrow" alt={`dropdown ${this.props.title}`}/>
                <h3>{this.props.title}</h3>
            </button>
        );
    }
};

export default ContentButton;
