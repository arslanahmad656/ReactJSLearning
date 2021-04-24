import React, { useState, useCallback } from 'react'
import ChildComponentDemo from './ChildComponentDemo';

function ParentComponentDemo() {
    console.log('Parent component rendering');

    const constValue = 'CONST_VALUE';
    let [count, setCount] = useState(0);

    const callback = useCallback(() => {
        console.log('Callback function called.');
    }, [constValue])

    const handleClick = () => {
        setCount(prev => prev + 1);
    }
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Clicking this should not re-render the child component.</button>
            <ChildComponentDemo callback={callback} />
        </div>
    )
}

export default ParentComponentDemo
