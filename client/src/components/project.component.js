import React, { Component } from "react";
import axios from "axios";

import "../styles/individual-project.css"
import { Link } from "react-router-dom";

export default class OneProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            typeofwork: [],
            techused: [],
            title: "",
            squareImg: "",
            weblink: "",
            githublink: "",
            overview: "",
            createddate: ""
        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/projects/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    images: response.data.images,
                    typeofwork: response.data.typeofwork,
                    techused: response.data.techused,
                    title: response.data.title,
                    squareImg: response.data.squareImg,
                    weblink: response.data.weblink,
                    githublink: response.data.githublink,
                    overview: response.data.overview,
                    createddate: response.data.createddate
                })
            })

            .catch((error) => {
                console.log(error);
            })

        // axios.get("http://localhost:5000/projects/")
        //     .then(res => {
        //         this.setState({ projects: res.data })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //console.log(response);
    }

    render() {
        return (
            <div>
                <div className="container">

                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block portfolio-img" src="./assets/images/ClarkCooper-Logo.jpg" alt="Slide" />
                            </div>
                            <div className="carousel-item active">
                                <img className="d-block portfolio-img" src="./assets/images/ClarkCooper-Logo.jpg" alt="Slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>

                <div className="container project-description-box">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h1>{this.state.title}</h1>

                            {this.state.typeofwork.map((worktype, index) => (
        <p>Type of work: {worktype.text}</p>
    ))}

                            <h4>{this.state.typeofwork[0]}</h4>
                            <p className="weblink"><a target="_blank" rel="noopener noreferrer" href={this.state.weblink}>Visit the website</a></p>
                            <p className="project-info">{this.state.overview}</p>
                            <p className="project-tech">
                                <strong>Designed Using:</strong><br />
                                {this.state.techused[0]}</p>
                            <p className="project-date">{this.state.createddate}</p>
                        </div>

                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </div>


        )
    }
}