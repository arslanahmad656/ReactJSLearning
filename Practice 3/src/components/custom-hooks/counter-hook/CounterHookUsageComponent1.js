import React from 'react'
import useCounter from './useCounter'

function CounterHookUsageComponent1() {
    const [count, increment, decrement, reset] = useCounter();

    return (
        <div>
            <p>Count: {count}</p>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default CounterHookUsageComponent1
