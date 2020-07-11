import React, { Component } from "react";

import "../styles/nav-style.css"

export default class Navbar extends Component {
    render() {
        return (<div>
            <a className="header1" href="/">
                <img className="logo" src="/img/ca-logo.png" alt="Logo" />
            </a>

            <nav className="header2 sm-icons">
                <a href="https://www.linkedin.com/in/christineatherholt/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/Tina-Lightning" title="GitHub" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-square"></i></a>
                <a href="http://chrissyatherholtportfolio.com/assets/CAtherholt-Resume-Dec2019.pdf" title="My Resume"
                    target="_blank" rel="noopener noreferrer"><i className="fa fa-list-alt"></i></a>
                <a href="mailto:c.atherholt@gmail.com" title="Email" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-square"></i></a>
                <a href="tel:1-609-504-5953" title="Phone Call" target="_blank" rel="noopener noreferrer"><i className="fa fa-phone-square"></i></a>
            </nav>
        </div>

        )
    }
}