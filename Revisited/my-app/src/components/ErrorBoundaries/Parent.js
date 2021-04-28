import React from 'react'
import Boundary from './Boundary'
import ErrorComponent from './ErrorComponent'

function Parent() {
    return (
        <div>
            <Boundary>
                <ErrorComponent technology={"Angular"} />
            </Boundary>
            <Boundary>
                <ErrorComponent technology={"Vue"} />
            </Boundary>
            <Boundary>
                <ErrorComponent technology={"React"} />
            </Boundary>
        </div>
    )
}

export default Parent
