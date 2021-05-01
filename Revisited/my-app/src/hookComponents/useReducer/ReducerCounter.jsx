import React, {useReducer} from 'react'

function ReducerCounter({initialValue, step}) {

    initialValue = initialValue || 0;
    step = step || 1;

    const stateReducer = (state, action) => {
        let updatedState;
        switch (action.toLowerCase()) {
            case 'increment':
                updatedState = state + step;
                break;
            case 'decrement':
                updatedState = state - step;
                break;
            case 'reset':
                updatedState = initialValue;
                break;
            default:
                updatedState = state;
                break;
        }

        return updatedState;
    }

    const [count, countDispatch] = useReducer(stateReducer, initialValue);

    const handleCountChange = event => {
        countDispatch(event.target.getAttribute('data-action'))
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button data-action="increment" onClick={handleCountChange}>Increment Count</button>
            <button data-action="decrement" onClick={handleCountChange}>Decrement Count</button>
            <button data-action="reset" onClick={handleCountChange}>Reset Count</button>
        </div>
    )
}

export default ReducerCounter
