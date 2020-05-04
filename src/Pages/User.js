import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Card } from '../Components/Card';
import { firstUpperCase } from '../functions';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            user: [],
            posts: []
        };
    }

    componentDidMount() {
        Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/" + this.props.match.params.id),
            fetch("https://jsonplaceholder.typicode.com/users/" + this.props.match.params.id + '/posts')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([res1, res2]) => {
                this.setState({
                    isLoaded: true,
                    user: res1,
                    posts: res2
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }

    render() {
        const { error, isLoaded, user, posts } = this.state;
        if (error) {
            return <div className="mt-5">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="mt-5">Loading...</div>;
        } else {
            const userPosts = posts.map(post => {
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
                <div className="row">
                    <div className="col-md-3 order-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h2 className="text-center">Profile</h2>
                        <div className="row">
                            <div className="col-6 text-right">
                                <p className="mb-2">Name</p>
                                <p className="mb-2">Username</p>
                                <p className="mb-2">Email</p>
                            </div>
                            <div className="col-6">
                                <p className="mb-2">{user.name}</p>
                                <p className="mb-2">{user.username}</p>
                                <p className="mb-2">{user.email}</p>
                            </div>
                        </div>

                        <h2 className="text-center mt-3">Address</h2>
                        <div className="row">
                            <div className="col-6 text-right">
                                <p className="mb-2">Street</p>
                                <p className="mb-2">Suite</p>
                                <p className="mb-2">City</p>
                                <p className="mb-2">ZIP</p>
                            </div>
                            <div className="col-6">
                                <p className="mb-2">{user.address.street}</p>
                                <p className="mb-2">{user.address.suite}</p>
                                <p className="mb-2">{user.address.city}</p>
                                <p className="mb-2">{user.address.zipcode}</p>
                            </div>
                        </div>

                        <h2 className="text-center mt-3">Contacts</h2>
                        <div className="row mb-4">
                            <div className="col-6 text-right">
                                <p className="mb-2">Phone</p>
                                <p className="mb-2">Site</p>
                                <p className="mb-2">Company name</p>
                            </div>
                            <div className="col-6">
                                <p className="mb-2">{user.phone}</p>
                                <p className="mb-2">{user.website}</p>
                                <p className="mb-2">{user.company.name}</p>
                            </div>
                        </div>

                        <hr />

                        <div className="mt-4">
                            <h2 className="mb-3">User posts</h2>
                            {userPosts}
                        </div>
                    </div>
                </div>
            );
        }
    }
}