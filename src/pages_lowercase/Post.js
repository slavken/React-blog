import React from 'react';
import Sidebar from '../components/Sidebar';
import { firstUpperCase } from '../functions';
import img from '../assets/default.png';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            post: [],
            user: [],
            comments: []
        };
    }

    componentDidMount() {
        Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id),
            fetch("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id + '/comments')
        ])
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
        .then(([res1, res2]) => {
                this.setState({
                    isLoaded: true,
                    post: res1,
                    comments: res2
                });

                fetch("https://jsonplaceholder.typicode.com/users/" + res1.userId)
                .then(res => res.json())
                .then(
                    res => {
                    this.setState({
                        isLoaded: true,
                        user: res
                    });
                    },
                    error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    }
                )
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
        const { error, isLoaded, post, user, comments } = this.state;
        if (error) {
            return <div className="mt-5">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="mt-5">Loading...</div>;
        } else {
            const comment = comments.map((res) => 
                <div className="media">
                    <div className="media-body my-3">
                        <h5 className="mt-0">{res.name} ({res.email})</h5>
                        {res.body}
                    </div>
                </div>
            );

            return (
                <div className="row">
                    <div className="col-md-3 order-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className="mb-5">
                            <img 
                                src={img}
                                className="w-100 mb-4" 
                                alt="..."
                            />
                            <div>
                                <h2>{firstUpperCase(post.title)}</h2>
                                <p>by <a href={'/users/' + user.id}>{user.name}</a></p>
                                <p>{post.body}</p>
                            </div>
                        </div>
                        <div>
                            <div class="card my-4">
                                <h5 class="card-header">Leave a comment:</h5>
                                <div class="card-body">
                                    <form method="post">
                                        <div class="form-group">
                                            <textarea class="form-control" rows="3" name="body"></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                            {comment}
                        </div>
                    </div>
                </div>
            );
        }
    }
}