import React, {Component} from "react";

const list = {
    marginLeft: "2rem",
    fontSize: "3rem",
}

export default class Interests extends Component {
    render () {
        return (
            <ul style={list}>
                <li>Speaking spanish with south american people.</li>
                <li>Trekking into the wilderness.</li>
                <li>Cooking amazing sushis.</li>
                <li>Go to social events or hackathon alone.</li>
                <li>Drawing people and animal illustrations.</li>
                <li>Taking street art tours.</li>
                <li>Organising events to gather people.</li>
                <li>Snowboarding fresh powder snow.</li>
                <li>Discovering wild animals in their natural habitat.</li>
            </ul>
        );
    };
}