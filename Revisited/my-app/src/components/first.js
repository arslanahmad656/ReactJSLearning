import React, { useState } from 'react'

function FirstComponent() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(counter + 1);
    return (
        <button onClick={handleClick}>
            Clicked {counter} time(s)
        </button>
    )
}

export default FirstComponent
