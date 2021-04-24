import React from 'react'

function ChildComponent({greetHandler}) {
    return (
        <div>
            <button onClick={() => greetHandler('child')}>Call Parent Method</button>
        </div> 
    )
}

export default ChildComponent
