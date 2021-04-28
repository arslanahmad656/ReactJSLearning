import React from 'react'

function ClickCounter({name, count, incrementCount}) {
    return (
        <div>
            <h3>Component '{name}'</h3>
            <button onClick={incrementCount}>Clicked {count} time(s)</button>
        </div>
    )
}

export default ClickCounter
