import React from 'react'
import ReactDOM from 'react-dom'

function ButtonContainer() {
    return ReactDOM.createPortal((
        <button>Click to trigger Event</button>
    ), document.getElementById('portal-main'));
}

export default ButtonContainer
