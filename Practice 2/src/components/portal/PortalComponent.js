import React from 'react'
import ReactDOM from 'react-dom'

function PortalComponent() {
    return ReactDOM.createPortal(
        <div>
            <h3>This is inside another node</h3>
        </div>, document.getElementById('portal-root')
    )
}

export default PortalComponent
