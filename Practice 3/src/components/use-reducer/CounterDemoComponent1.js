import React, { useReducer } from 'react'
import { initialValue, reducer as reducer1 } from './CountReducer1'

function CounterDemoComponent1() {
    const [currentCount, countStateDispatch] = useReducer(reducer1, initialValue)
    return (
        <div>
            <p>Count - {currentCount}</p>

            <div>
                <button onClick={() => countStateDispatch('increment')}>Increment</button>
                <button onClick={() => countStateDispatch('decrement')}>Decrement</button>
                <button onClick={() => countStateDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default CounterDemoComponent1
