import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UseEffectComponent() {
    const [post, setPost] = useState({});
    const [postId, setPostId] = useState(1);

    useEffect(() => {
        if (!postId) {
            console.log('Ignored empty ID');
            return;
        }
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        console.log('Sending request to', url);
        axios.get(url)
            .then(response => {
                console.log(response);
                setPost(response.data);
            })
            .catch(err => console.error(err));
        return () => console.log('Component Unmounted.');
    }, [postId])

    return (
        <div>
            <input type='text' value={postId} onChange={evt => setPostId(evt.target.value)} />
            <p>Post - {post.id}: {post.title}</p>
        </div>
    )
}

export default UseEffectComponent
