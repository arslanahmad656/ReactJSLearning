import React from 'react'

function Person({person: {name}}) {
    return (
        <>
            {name}
        </>
    )
}

export default Person
