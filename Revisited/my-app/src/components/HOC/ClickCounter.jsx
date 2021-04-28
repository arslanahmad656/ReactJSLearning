import React from 'react'
import withCounter from './withCounter'

function ClickCounter({count, incrementCount, name}) {
    return (
        <div>
            <h3>Component {name}</h3>
            <button onClick={incrementCount}>Clicked {count} times</button>
        </div>
    )
}

export default withCounter(ClickCounter, 0, 1)
