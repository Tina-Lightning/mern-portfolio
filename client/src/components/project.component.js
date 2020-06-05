import React, { Component } from "react";
import { Link } from "react-router-dom";

const Project = props => {
    return <div>
        <tr>
            <td>{props.project.title}</td>
            <td>{props.project.image}</td>
            <td>{props.project.typeofwork}</td>
            <td>{props.project.weblink}</td>
            <td>{props.project.githublink}</td>
            <td>{props.project.overview}</td>
            <td>{props.project.techused}</td>
            <td>{props.project.createddate}</td>
            <td>
                <Link to={"/edit/" + props.project._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProject(props.project._id) }}>delete</a>
            </td>
        </tr>
    </div>

}

export default Project;