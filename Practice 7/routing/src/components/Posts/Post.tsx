import React, { useEffect } from 'react'
import IPost from './IPost'

function Post(props: {post?: IPost}) {
    const post = props.post;

    return (
        <>
            {
                post ? (
                    <>
                        <div>Post has id {post.id}</div>
                        <div>{post.body}</div>
                    </>
                ) : <div>Post is not available</div>
            }
        </>
    )
}

export default Post
