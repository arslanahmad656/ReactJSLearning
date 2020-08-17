import React, { useRef, useEffect } from 'react'

function UseRefDemoCompoent() {
    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef);
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

export default UseRefDemoCompoent