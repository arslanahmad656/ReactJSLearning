import React from 'react'

function NormalFunctionalComponent({name}) {
    console.log('NORMAL FUNCTIONAL COMPONENT RENDERING');
    return (
        <div>
            Normal Functional Component: {name}
        </div>
    )
}

export default NormalFunctionalComponent
