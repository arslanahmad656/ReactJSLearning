import React from 'react'
import IComment from './IComment'

function Comment(props: {comment?: IComment}) {
    const { comment } = props;
    return (
        <div className="comment">
            <header className="title">
                <h2>
                    <span>{comment?.name}</span> (<small>{comment?.email}</small>)
                </h2>
            </header>
            <article className="body">
                <p>{comment?.body}</p>
            </article>
        </div>
    )
}

export default Comment
