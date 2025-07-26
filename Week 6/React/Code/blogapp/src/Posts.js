import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            error: null
        };
    }

    loadPosts() {
        // Simulating API call
        const data = [
            new Post(1, 'Post One', 'This is the body of post one.'),
            new Post(2, 'Post Two', 'This is the body of post two.'),
            new Post(3, 'Post Three', 'This is the body of post three.')
        ];
        this.setState({ posts: data });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("An error occurred: " + error.toString());
        this.setState({ error: error });
    }

    render() {
        return (
            <div>
                <h1>All Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
