import React, { useReducer } from 'react'
import { reducer } from './CountReducer1'
import { initialValue as initialCount1, reducer as countReducer1 } from './CountReducer1'
import { initialValue as initialCount2, reducer as countReducer2 } from './CountReducer1'

function CounterDemoComponent3() {
    const [countState1, countState1Dispatch] = useReducer(countReducer1, initialCount1);
    const [countState2, countState2Dispatch] = useReducer(countReducer2, initialCount2);

    return (
        <div>
            <div>
                <p>Count#1 - {countState1}</p>
                <div>
                    <button onClick={() => countState1Dispatch('increment')}>Increment</button>
                    <button onClick={() => countState1Dispatch('decrement')}>Decrement</button>
                    <button onClick={() => countState1Dispatch('reset')}>Reset</button>
                </div>
            </div>
            <div>
                <p>Count#2 - {countState2}</p>
                <div>
                    <button onClick={() => countState2Dispatch('increment')}>Increment</button>
                    <button onClick={() => countState2Dispatch('decrement')}>Decrement</button>
                    <button onClick={() => countState2Dispatch('reset')}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default CounterDemoComponent3
