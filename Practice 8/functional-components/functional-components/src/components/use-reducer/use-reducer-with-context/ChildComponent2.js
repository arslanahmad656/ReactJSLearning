import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

function ChildComponent2() {
    const {count: countState, dispatch: countStateDispatch} = useContext(CounterContext);
    
    return (
        <div>
            <p>Value in Child#2: {countState}</p>
            <div>
                <button onClick={() => countStateDispatch('increment')}>Increment</button>
                <button onClick={() => countStateDispatch('decrement')}>Decrement</button>
                <button onClick={() => countStateDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ChildComponent2