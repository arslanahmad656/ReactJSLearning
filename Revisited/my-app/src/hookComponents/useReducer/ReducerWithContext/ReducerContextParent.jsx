import React, { useReducer } from 'react'
import Component1 from './Component1';
import CountContext from './CountContext';
import getCountReducerMethod from './SharedCounter'

function ReducerContextParent() {
    const initialValue = 5, step = -2;

    const countReducerMethod = getCountReducerMethod(initialValue, step);
    const countReducer = useReducer(countReducerMethod, initialValue);

    return (
        <CountContext.Provider value={countReducer}>
            <div>
                <h3>Count in Parent: {countReducer[0]}</h3>
                <b><i><i>Initial: {initialValue}, step: {step}</i></i></b>
                <Component1 />
            </div>
        </CountContext.Provider> 
    )
}

export default ReducerContextParent
