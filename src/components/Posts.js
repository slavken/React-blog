import React, { Component } from 'react';
import { Card } from './Card';
import { firstUpperCase } from '../functions';

export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
            res => {
            this.setState({
                isLoaded: true,
                posts: res
            });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div className="mt-5">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="mt-5">Loading...</div>;
        } else {
            const content = posts.slice(0, 25).map(post => {
                    const title = post.title.length > 40 ? post.title.substr(0, 40) + '...' : post.title;
                    return (
                        <Card 
                            key={post.id}
                            id={post.id}
                            title={firstUpperCase(title)}
                            body={post.body}
                        />
                    );
                }
            );

            return (
                <div>
                    {content}
                </div>
            );
        }
    }
}