import React from 'react'
import Books from './Books'
import BookComponentErrorBoundary from './BookComponentErrorBoundary'
import ErrorBoundaryComponent from './ErrorBoundaryComponent'

function BooksListErrorBoundaryComponent() {
    return (
        <div>
            {
                Books.map(b => <ErrorBoundaryComponent><BookComponentErrorBoundary key={b.id} book={b}/></ErrorBoundaryComponent>)
            }
        </div>
    )
}

export default BooksListErrorBoundaryComponent
