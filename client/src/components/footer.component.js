import React, { Component } from "react";

import "../styles/footer-style.css"

export default class Footer extends Component {
    render() {
        return (<div className="container-fluid fixed-bottom footer">
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
                <p className="footer-text">Copyright &copy; {(new Date().getFullYear())} -
                    Chrissy
                    Atherholt</p>
            </div>
            <div className="col-lg-4"></div>
        </div>
    </div>

        )
    }
}