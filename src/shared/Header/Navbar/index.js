// NAVBAR -- COMPONENT
// ------------------------------

// IMPORT FROM PACKAGES
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"

// IMPORT FROM FILES
import "./Navbar.css"

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <HashLink to="/#list">List</HashLink>
                <Link to="/about">About</Link>
            </nav>
        )
    }
}
