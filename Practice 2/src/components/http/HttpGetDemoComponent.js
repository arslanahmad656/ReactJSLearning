import React, { Component } from 'react'
import axios from 'axios'
import PostComponentForHttpDemo from './PostComponentForHttpDemo'

const style = {
    textAlign: 'left'
}

const warningStyle = {
    color: 'orange'
}

class HttpGetDemoComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             error: undefined
        }
    }
    
    render() {
        return (
            <div style={style}>
                <h2>List of posts</h2>
                {
                    this.state.posts.length ? 
                        <ul>{this.state.posts.map(post => <li key={post.id}><PostComponentForHttpDemo post={post} /></li>)}</ul> :
                        <h3 style={warningStyle}>Posts are not available.</h3>
                }
            </div>
        )
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({
                    posts: response.data
                })
            }).catch(err => {
                console.log(err);
                alert('Error occurred while fetching posts')
            });
    }
}

export default HttpGetDemoComponent
