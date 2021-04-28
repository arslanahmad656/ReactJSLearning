import React from 'react'
import ClickCounter from './ClickCounter'
import Counter from './Counter'
import KeyPressCounter from './KeyPressCounter'

function RenderPropsParent() {
    return (
        <div>
            <Counter 
                initialValue={10}
                step={5}
                render={(count, incrementCount) => <ClickCounter name="Click Counter" count={count} incrementCount={incrementCount} />}
            />
            <br/>
            <hr/>

            <Counter 
                render={(count, incCount) => <KeyPressCounter name="Key Press Counter" count={count} incrementCount={incCount} placeholder="Type Text Here..."/>}
            />
        </div>
    )
}

export default RenderPropsParent
