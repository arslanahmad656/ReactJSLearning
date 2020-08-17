import React, { useState } from 'react'

function UseStateComponent1() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Incremented {count} times</button>
        </div>
    )
}

export default UseStateComponent1
