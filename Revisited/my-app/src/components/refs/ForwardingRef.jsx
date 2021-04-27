import React from 'react'

const ForwardingRef = React.forwardRef((props, ref) => {
    return (
        <div>
            <input placeholder="Forwarding Ref Input" ref={ref} />
        </div>
    )
})

export default ForwardingRef
