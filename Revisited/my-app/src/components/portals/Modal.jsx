import React from 'react'
import ReactDOM from 'react-dom'

const containerStyle = {
    backgroundColor: 'rgba(127, 127, 0, 0.90)',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center'
}

const modalStyle = {
    padding: 20,
    background: "rgba(0, 127, 127, 1.0)",
    borderRadius: "10px",
    display: "inline-block",
    minHeight: "300px",
    margin: "1rem",
    position: "relative",
    minWidth: "300px",
    boxShadow: "15px 25px 25px rgba(0,0,0,0.35)",
    justifySelf: "center"
}

const modalFooterStyle = {
    position: 'absolute',
    bottom: '4%',
    width: '90%'
}

function Modal({onModalClose, children}) {
    const ui = (
        <div style={containerStyle}>
            <div style={modalStyle} onClick={onModalClose}>
                {children}
                <div style={modalFooterStyle}>
                    <hr/>
                    <button onClick={onModalClose}>Close</button>
                </div>
            </div>
        </div>
    );

    const modalRoot = document.getElementById('modal-root');

    return ReactDOM.createPortal(ui, modalRoot, "test-modal");
}

export default Modal
