import React, { Component } from "react";
import axios from "axios";

import "../styles/portfolio-images.css"

import { Link } from "react-router-dom";

import { Tabs, Tab } from 'react-bootstrap'

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

    renderImgSquares = () => {
        return (
            this.state.projects.map((currentProject) => (
                <div className="example-work-container" key={currentProject._id}>
                    <Link className="content" to={"/projects/" + currentProject._id}>
                        <img alt="portfolio-square" src={currentProject.squareImg} style={{ width: "100%" }} />
                        <div className="title-text">{currentProject.title}</div>
                    </Link>
                </div>
            ))
        )
    }

    ControlledTabs = () => {
        return (
            <Tabs className="nav-justified" defaultActiveKey="all" transition={false} id="noanim-tab-example">
                <Tab eventKey="all" title="All">
                    {this.renderImgSquares()}
                </Tab>
                <Tab eventKey="graphic" title="Graphic">
                    {this.renderFilteredGraphicsProjects()}
                </Tab>
                <Tab eventKey="personal" title="Personal">
                    {this.renderFilteredPersonalProjects()}
                </Tab>
                <Tab eventKey="professional" title="Professional">
                    {this.renderFilteredProfessProjects()}
                </Tab>
                <Tab eventKey="student" title="Student">
                    {this.renderFilteredStudentProjects()}
                </Tab>
                <Tab eventKey="web" title="Web">
                    {this.renderFilteredWebProjects()}
                </Tab>
            </Tabs>
        );
    }

    renderFilteredAllProjects = () => {
        return (
            this.state.projects.filter(project => project.workTypeAll === true).map(filteredProject => (
                <div className="row portfolio-work-container">
                <div className="column example-work-container" key={filteredProject._id}>
                    <Link className="content" to={"/projects/" + filteredProject._id}>
                        <img alt="portfolio-square" src={filteredProject.squareImg} style={{ width: "100%" }} />
                        <div className="title-text">{filteredProject.title}</div>
                    </Link>
                </div>
                </div>
            ))
        );
    }
    renderFilteredGraphicsProjects = () => {
        return (
            this.state.projects.filter(project => project.workTypeGraphic === true).map(filteredProject => (
                <div className="column example-work-container" key={filteredProject._id}>
                    <Link className="content" to={"/projects/" + filteredProject._id}>
                        <img alt="portfolio-square" src={filteredProject.squareImg} style={{ width: "100%" }} />
                        <div className="title-text">{filteredProject.title}</div>
                    </Link>
                </div>
            ))
        );
    }
    renderFilteredPersonalProjects = () => {
        return (
            this.state.projects.filter(project => project.workTypePersonal === true).map(filteredProject => (
                <div className="column example-work-container" key={filteredProject._id}>
                    <Link className="content" to={"/projects/" + filteredProject._id}>
                        <img alt="portfolio-square" src={filteredProject.squareImg} style={{ width: "100%" }} />
                        <div className="title-text">{filteredProject.title}</div>
                    </Link>
                </div>
            ))
        );
    }
    renderFilteredProfessProjects = () => {
        return (
            this.state.projects.filter(project => project.workTypeProfessional === true).map(filteredProject => (
                <div className="column example-work-container" key={filteredProject._id}>
                    <Link className="content" to={"/projects/" + filteredProject._id}>
                        <img alt="portfolio-square" src={filteredProject.squareImg} style={{ width: "100%" }} />
                        <div className="title-text">{filteredProject.title}</div>
                    </Link>
                </div>
            ))
        );
    }
    renderFilteredStudentProjects = () => {
        return (
            this.state.projects.filter(project => project.workTypeStudent === true).map(filteredProject => (
                <div className="column example-work-container" key={filteredProject._id}>
                    <Link className="content" to={"/projects/" + filteredProject._id}>
                        <img alt="portfolio-square" src={filteredProject.squareImg} style={{ width: "100%" }} />
                        <div className="title-text">{filteredProject.title}</div>
                    </Link>
                </div>
            ))
        );
    }
    renderFilteredWebProjects = () => {
        return (
            this.state.projects.filter(project => project.workTypeWeb === true).map(filteredProject => (
                <div className="column example-work-container" key={filteredProject._id}>
                    <Link className="content" to={"/projects/" + filteredProject._id}>
                        <img alt="portfolio-square" src={filteredProject.squareImg} style={{ width: "100%" }} />
                        <div className="title-text">{filteredProject.title}</div>
                    </Link>
                </div>
            ))
        );
    }




    render() {
        return (
            <div >
                {this.ControlledTabs()}
            </div>

        )
    }
}