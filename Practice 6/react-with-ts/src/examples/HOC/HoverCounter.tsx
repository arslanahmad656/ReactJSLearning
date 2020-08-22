import React from 'react'
import withCounter from './withCounter'

function HoverCounter(props: {count: number, incrementCount: () => void, info: string}) {
    return (
        <div onMouseOver={props.incrementCount}>
            <h2>Hover Counter: {props.info}</h2>
            <h4>Count: {props.count}</h4>
        </div>
    )
}

const HoverCounterWithHOC = withCounter(HoverCounter);
export default HoverCounterWithHOC;
