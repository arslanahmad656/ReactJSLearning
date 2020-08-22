import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

function Modal({modalRootId, children: modalContent}) {
    const modalContainer = document.createElement('div');

    useEffect(() => {
        document.getElementById(modalRootId).appendChild(modalContainer);

        return () => document.getElementById(modalRootId).removeChild(modalContainer);
    }, [])

    return (
        ReactDOM.createPortal(modalContent, modalContainer)
    )
}

export default Modal
