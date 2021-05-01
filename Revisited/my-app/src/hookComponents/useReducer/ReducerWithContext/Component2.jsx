import React, { useContext } from 'react'
import CountContext from './CountContext'

function Component2 () {
    const [count, countDispatch] = useContext(CountContext);
    
    const handleCountChange = event => {
        countDispatch(event.target.getAttribute('data-action'))
    }

    return (
        <div>
            <h5>Count in component 2: {count}</h5>
            <button data-action="increment" onClick={handleCountChange}>Increment Count</button>
            <button data-action="decrement" onClick={handleCountChange}>Decrement Count</button>
            <button data-action="reset" onClick={handleCountChange}>Reset Count</button>
        </div>
    )
}

export default Component2
