import React, { Component } from "react";

// import image
import arrowImg from "../../images/keyboard-right-arrow-button.svg";

class ContentButton extends Component {
    render () {
        return (
            <div className={"content-button " + (this.props.toggle? "godown" : "")}>
                <button className={"dropdown-button " + (this.props.toggle? "emphasis" : "")} onClick={this.props.onClick}>
                    <img src={arrowImg} className={"right-arrow " + (this.props.toggle? "drop" : "")} alt={`dropdown ${this.props.title}`}/>
                    <h3>{this.props.title}&nbsp;</h3>
                </button>
            </div>
        );
    }
};

export default ContentButton;
