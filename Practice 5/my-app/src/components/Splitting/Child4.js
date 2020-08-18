import React from 'react'

console.log('Child4 has been loaded.');

function Child4({info, visible}) {
    return (
        <div>
            <h3>Child Component 4: {info}</h3>
            {visible && <p>I am visible</p>}
        </div>
    )
}

export default Child4
