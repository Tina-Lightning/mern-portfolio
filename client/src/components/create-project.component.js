import React, { Component } from "react";
import axios from "axios";

export default class CreateProject extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeTypeofWork = this.onChangeTypeofWork.bind(this);
        this.onChangeWeblink = this.onChangeWeblink.bind(this);
        this.onChangeGithub = this.onChangeGithub.bind(this);
        this.onChangeOverview = this.onChangeOverview.bind(this);
        this.onChangeTechused = this.onChangeTechused.bind(this);
        this.onChangeCreatedDate = this.onChangeCreatedDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            image: "",
            title: "",
            typeofwork: "",
            weblink: "",
            githublink: "",
            overview: "",
            techused: "",
            createddate: "",
            users: [],
            typesofWork: []
        }
    }

    componentDidMount() {

        axios.get("http://localhost:5000/projects/")
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        typesofWork: res.data.map(project => project.typeofwork),
                        typeofwork: res.data[0].typeofwork
                    })
                }
            })

        axios.get("http://localhost:5000/users/")
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    })
                }
            })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeImage(e) {
        this.setState({
            image: e.target.value
        });
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeTypeofWork(e) {
        this.setState({
            typeofwork: e.target.value
        });
    }

    onChangeWeblink(e) {
        this.setState({
            weblink: e.target.value
        });
    }

    onChangeGithub(e) {
        this.setState({
            githublink: e.target.value
        });
    }

    onChangeOverview(e) {
        this.setState({
            overview: e.target.value
        });
    }

    onChangeTechused(e) {
        this.setState({
            techused: e.target.value
        });
    }

    onChangeCreatedDate(e) {
        this.setState({
            createddate: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const project = {
            username: this.state.username,
            image: this.state.image,
            title: this.state.title,
            typeofwork: this.state.typeofwork,
            weblink: this.state.weblink,
            githublink: this.state.githublink,
            overview: this.state.overview,
            techused: this.state.techused,
            createddate: this.state.createddate,
        }
        console.log(project);

        axios.post("http://localhost:5000/projects/add", project)
            .then(res => console.log(res.data));

        this.setState({
            username: "",
            image: "",
            title: "",
            typeofwork: "",
            weblink: "",
            githublink: "",
            overview: "",
            techused: "",
            createddate: ""
        })
    }



    render() {
        return (
            <div>
                <h3>Create a new Project</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function (user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Image: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeImage}
                        />
                    </div>

                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Type of Work: </label>

                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.typeofwork}
                            onChange={this.onChangeTypeofWork}>
                            {
                                this.state.typesofWork.map(function (typOwork) {
                                    return <option
                                        key={typOwork}
                                        value={typOwork}>{typOwork}
                                    </option>;
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Link to Website: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.weblink}
                            onChange={this.onChangeWeblink}
                        />
                    </div>

                    <div className="form-group">
                        <label>Link to GitHub: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.githublink}
                            onChange={this.onChangeGithub}
                        />
                    </div>

                    <div className="form-group">
                        <label>Overview: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.overview}
                            onChange={this.onChangeOverview}
                        />
                    </div>

                    <div className="form-group">
                        <label>Technologies Used: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.techused}
                            onChange={this.onChangeTechused}
                        />
                    </div>

                    <div className="form-group">
                        <label>Created: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.createddate}
                            onChange={this.onChangeCreatedDate}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create New Project" className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}