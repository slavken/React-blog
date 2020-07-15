import React, { Component } from 'react';

export default class Contacts extends Component {
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-7 card">
                    <div className="card-body">
                        <h1 className="mb-4">Contact Us</h1>
                        <form method="post">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="question" cols="30" rows="10" required />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}