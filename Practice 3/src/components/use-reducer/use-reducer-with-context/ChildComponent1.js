import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

function ChildComponent1() {
    const {count: countState, dispatch: countStateDispatch} = useContext(CounterContext);
    
    return (
        <div>
            <p>Value in Child#1: {countState}</p>
            <div>
                <button onClick={() => countStateDispatch('increment')}>Increment</button>
                <button onClick={() => countStateDispatch('decrement')}>Decrement</button>
                <button onClick={() => countStateDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ChildComponent1
