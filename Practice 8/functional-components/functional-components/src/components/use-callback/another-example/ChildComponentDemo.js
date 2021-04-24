import React from 'react'

const ChildComponentDemo = React.memo(({ callback }) => {
    console.log('Child rendering');
    return (
        <div>
            <button onClick={callback}>Child Button</button>
        </div>
    )
});


export default ChildComponentDemo
