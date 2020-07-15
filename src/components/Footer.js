import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-white">
                <div className="container py-5">
                    <div className="row text-center">
                        <div className="col-12 col-md text-md-left">
                            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                                <img 
                                    src={this.props.logo}
                                    width="50"
                                    height="50"
                                    alt="Logo"
                                />
                                <h3>React Blog</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, eaque.</p>
                        </div>
                        <div className="col-12 col-md text-md-left">
                            <h5 className="text-uppercase mb-3">Services</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="col-12 col-md text-md-left">
                            <h5 className="text-uppercase mb-3">Solutions</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="col-12 col-md text-md-right">
                            <h5 className="text-uppercase mb-3">Contacts</h5>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    logo: PropTypes.string
};