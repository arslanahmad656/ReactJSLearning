import React, { useRef, useEffect, useState } from 'react'

function UseRefDemoComponent2() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => setCount(prev => prev + 1), 1000);
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [])

    return (
        <div>
            <p>Count: {count}</p> 
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}

export default UseRefDemoComponent2
