import React from 'react'

console.log('Child3 component module has been loaded.');

function Child3({info}) {
    return (
        <div>
            <h2>Child3 Component. Info: {info}</h2>
        </div>
    )
}

export default Child3
