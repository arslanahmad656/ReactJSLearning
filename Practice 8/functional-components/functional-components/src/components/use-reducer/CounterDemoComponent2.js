import React, { useReducer } from 'react'
import { reducer, initialValue } from './CountReducer2'

function CounterDemoComponent2() {
    const [currentCount, countStateDispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <p>Count- {currentCount.counter}</p>

            <div>
                <button onClick={() => countStateDispatch({type: 'increment', value: 5})}>Increment</button>
                <button onClick={() => countStateDispatch({type: 'decrement', value: 5})}>Decrement</button>
                <button onClick={() => countStateDispatch({type: 'reset'})}>Reset</button>
            </div>
        </div>
    )
}

export default CounterDemoComponent2
