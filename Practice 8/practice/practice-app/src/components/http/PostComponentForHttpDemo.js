import React from 'react'

function PostComponentForHttpDemo({post: {id, title, body}}) {
    return (
        <>
            Post <b>{id}</b>: <i>{title}</i> <br/>
            {body}
        </>
    )
}

export default PostComponentForHttpDemo
