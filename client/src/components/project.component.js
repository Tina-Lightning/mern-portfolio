import React, { Component } from "react";
import axios from "axios";

import Carousel from 'react-bootstrap/Carousel'

import "../styles/individual-project.css"

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

    renderWorkTypes = () => {
        return (
            <div>
                {this.state.typeofwork.map(function (item, index) {
                    return <span key={index}>{(index ? ', ' : '') + item}</span>;
                })}

            </div>
        )
    }

    renderDesignedUsing = () => {
        return (
            <div>
                {this.state.techused.map((info, i) => (
                    <li key={i}>{info}</li>
                ))}
            </div>
        )
    }

    render() {

        return (
            <div>

                <Carousel>
                    {this.state.images.map((img, i) => (
                        <Carousel.Item>
                            <img
                                className="d-block portfolio-img"
                                src={img}
                                alt="Slide"
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className="container project-description-box">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h1>{this.state.title}</h1>

                            <h4>{this.renderWorkTypes()}</h4>

                            <p className="weblink">

                                {this.state.weblink.length > 0 &&
                                    <a target="_blank" rel="noopener noreferrer" href={this.state.weblink}>Visit the website </a>}

                                {this.state.githublink.length > 0 && <a target="_blank" rel="noopener noreferrer" href={this.state.githublink}>| GitHub Code Link</a>}

                            </p>

                            <p className="project-info">{this.state.overview}</p>

                            <p className="project-tech">
                                <strong>Designed Using:</strong>
                                <ul>
                                    {this.renderDesignedUsing()}
                                </ul>
                            </p>

                            <p className="project-date">{this.state.createddate}</p>
                        </div>

                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </div>


        )
    }
}