import React, { useReducer } from 'react'
import { CounterContext } from './CounterContext'
import ChildComponent1 from './ChildComponent1'
import { reducer, initialValue } from '../CountReducer1'
import ChildComponent2 from './ChildComponent2';

function ParentComponentForContextReducerDemo() {
    const [countState, countStateDispatch] = useReducer(reducer, initialValue);
    return (
        <CounterContext.Provider value={{count: countState, dispatch: countStateDispatch}}>
            <p>Value in parent: {countState}</p>
            <ChildComponent1 />
            <ChildComponent2 />
        </CounterContext.Provider>
    )
}

export default ParentComponentForContextReducerDemo
