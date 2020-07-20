import React, { Component } from 'react';
import Categories from './Categories';

export default class Sidebar extends Component {
    render() {
        return (
            <div className="mb-4 mb-md-0">
                <h5 className="text-center">Categories</h5>
                <div className="list-group">
                    <Categories />
                </div>
                <div className="card mt-4">
                    <h5 className="card-header text-center">Side Widget</h5>
                    <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet deleniti velit quae magnam modi, officiis eligendi doloribus. Labore, veritatis.
                    </div>
                </div>
            </div>
        );
    }
}