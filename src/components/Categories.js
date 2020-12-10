import React, { Component } from 'react';

export default class Categories extends Component {
    render() {
        const categories = [
            'Html/Css',
            'JavaScript',
            'PHP',
            'Python',
            'Java',
            'C#'
        ].map(category => 
            <a href="#" className="list-group-item list-group-item-action" key={category}>{category}</a>
        );

        return (
            <>
                {categories}
            </>
        );
    }
}