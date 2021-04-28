import React from 'react'
import ClickCounter from './ClickCounter'
import KeyPressCounter from './KeyPressCounter'

function HOCDemo() {
    return (
        <div>
            <ClickCounter name={"Click Counter"} />
            <hr/>
            <KeyPressCounter name="Key Press Counters" />
        </div>
    )
}

export default HOCDemo
