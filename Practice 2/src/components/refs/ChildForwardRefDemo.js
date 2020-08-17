import React from 'react'

const ChildForwardRefDemo = React.forwardRef((props, ref) => {
    return (
        <div>
            <h2 ref={ref}>I am from child</h2>
        </div>
    )
});

export default ChildForwardRefDemo
