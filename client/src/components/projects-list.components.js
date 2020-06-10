import React, { Component } from "react";
import axios from "axios";

import Project from "./project.component";

export default class ProjectsList extends Component {
    constructor(props) {
        super(props);

        this.deleteProject = this.deleteProject.bind(this);

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

    deleteProject(id) {
        axios.delete("http://localhost:5000/projects/"+id)
        .then(res => console.log(res.data));
        this.setState({
            projects: this.state.projects.filter(el => el._id !== id )
        })
    }

    exercisesList() {
        return this.state.projects.map(currentProject => {
            return <Project project={currentProject} deleteProject={this.deleteProject} key={currentProject._id} />;
        })
    }

    render () {
        return (
            <div>
               <h3>Projects</h3>
               <table className="table">
                   <thead className="thead-light">
                       <tr>
                           <th>Title</th>
                           <th>Images</th>
                           <th>Square Image</th>
                           <th>Type</th>
                           <th>Link to Webpage</th>
                           <th>Link to Github</th>
                           <th>Overview</th>
                           <th>Technology Used</th>
                           <th>Created Date</th>
                           <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       { this.exercisesList() }
                   </tbody>
               </table>
            </div>
        )
    }
}