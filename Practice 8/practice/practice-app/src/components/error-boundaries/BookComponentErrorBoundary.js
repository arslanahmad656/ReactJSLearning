import React from 'react'

function BookComponentErrorBoundary({book: {id, title, author}}) {
    if (id === 0) {
        throw new Error('Invalid ID');
    }
    return (
        <div>
            <p>
                Book <b>{id}</b> (<b>{title}</b>) written by <b>{author}</b>
            </p>
        </div>
    )
}

export default BookComponentErrorBoundary
