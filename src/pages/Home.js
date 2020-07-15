import React, { Component } from 'react';
import Carousel from '../components/Carousel';
import Posts from '../components/Posts';
import Sidebar from '../components/Sidebar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <div className="row">
                    <div className="col-md-3 order-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 order-md-1">
                        <Posts />
                    </div>
                </div>
            </div>
        );
    }
}