import React from "react";
import { Link } from "react-router-dom";

const Project = props => {
    return <tr>
            <td>{props.project.title}</td>
            <td><img src={props.project.image} alt="portfolio" width="100"/></td>
            <td>{props.project.typeofwork}</td>
            <td><a href={props.project.weblink} target="_blank" rel="noopener noreferrer">Visit the website</a></td>
            <td><a href={props.project.githublink} target="_blank" rel="noopener noreferrer">GitHub Code Link</a></td>
            <td>{props.project.overview}</td>
            <td>{props.project.techused}</td>
            <td>{props.project.createddate}</td>
            <td>
                <Link to={"/edit/" + props.project._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProject(props.project._id) }}>delete</a>
            </td>
        </tr>
}

export default Project;