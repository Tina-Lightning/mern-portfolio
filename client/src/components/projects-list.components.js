import React, { Component } from "react";
import axios from "axios";

import "../styles/portfolio-images.css"

import { Link } from "react-router-dom";

import {Tabs, Tab} from 'react-bootstrap'

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
                <div className="column example-work-container" key={currentProject._id}>
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
            <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
            <Tab eventKey="home" title="Home">
              <p>home</p>
            </Tab>
            <Tab eventKey="profile" title="Profile">
            <p>profile</p>
            </Tab>
            <Tab eventKey="contact" title="Contact">
            <p>contact</p>
            </Tab>
          </Tabs>
        );
      }
      

    render() {
        return (
            <div>
                <div id="myBtnContainer" className="btn-container">
                    <button className="filter-btn" type="button" data-id="all">All</button>
                    <button className="filter-btn" type="button" data-id="web"> Web</button>
                    <button className="filter-btn" type="button" data-id="graphic"> Graphic</button>
                    <button className="filter-btn" type="button" data-id="student"> Student</button>
                    <button className="filter-btn" type="button" data-id="professional"> Professional</button>
                    <button className="filter-btn" type="button" data-id="personal"> Personal</button>
                </div>

                <div className="row portfolio-work-container">{this.ControlledTabs()}</div>
            </div>

        )
    }
}