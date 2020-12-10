import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img 
                            src={this.props.logo} 
                            width="30" 
                            height="30" 
                            className="d-inline-block align-top" 
                            alt="Logo"
                        /> React Blog
                    </a>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarText" 
                        aria-controls="navbarText" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">Main</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacts" className="nav-link">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/test" className="nav-link">Test</NavLink>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            Navbar text with an inline element
                        </span>
                    </div>
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    logo: PropTypes.string
}