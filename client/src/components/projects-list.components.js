import React, { Component } from "react";
import axios from "axios";

import "../styles/portfolio-images.css"
import { Link } from "react-router-dom";

export default class ProjectsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/projects/")
            .then(res => {
                this.setState({ projects: res.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="row portfolio-work-container">
                {this.state.projects.map((currentProject) => (
                    <div className="column example-work-container" key={currentProject._id}>
                        <Link className="content" to={"/projects/" + currentProject._id}>
                            <img alt="portfolio-square" src={currentProject.squareImg} style={{ width: "100%" }} />
                            <div className="title-text">{currentProject.title}</div>
                        </Link>
                    </div>
                ))}
            </div>

        )
    }
}