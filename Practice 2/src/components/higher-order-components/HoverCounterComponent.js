import React from 'react'
import counter from './counter'

function HoverCounterComponent({count, incrementCount}) {
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Incremented {count} times.</h2>
        </div>
    )
}

export default counter(HoverCounterComponent, 10);
