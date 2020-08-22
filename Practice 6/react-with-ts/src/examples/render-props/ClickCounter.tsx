import React from 'react'
import Counter from './Counter'

function ClickCounter(props: {count: Number, incrementCount: () => void}) {
    return (
        <div>
            <h2>Click Counter - {props.count}</h2>
            <button onClick={props.incrementCount}>Increment</button>
        </div>
    )
}

export default ClickCounter
