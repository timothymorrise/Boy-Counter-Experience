// FOOTER -- COMPONENT
// ------------------------------

//IMPORT PACKAGES
import React, { Component } from 'react'

//IMPORT FILES
import "./Footer.css"

//CONSTRUCTOR
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="watch-mf-link">
                    <a href="https://www.polygon.com/monster-factory" target="_blank">
                        Watch Monster Factory
                    </a>
                </div>
                <div className="icon-container">
                    <a href="mailto:timothy.morrise@gmail.com">
                        <div className="icon" id="mail"></div>
                    </a>
                    <a href="https://www.linkedin.com/in/timothy-morrise-1086574b">
                        <div className="icon" id="linkedin"></div>
                    </a>
                    <a href="https://github.com/timothymorrise">
                        <div className="icon" id="github"></div>
                    </a>
                </div>
                <div className="header-credit"><a className="footer-link" href="http://keroberrycola.tumblr.com/" target="_blank">
                    header art by kerroberrycola
                    </a>
                </div>
            </footer>
        )
    }
}
