import React, { useState } from 'react'
import Modal from './Modal';

const modalStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.50)', 
    position: 'fixed', 
    height: '100%', 
    width: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function ModalViewer() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Click to show modal</button>
            {
                showModal && <Modal modalRootId='modal-root'>
                    <div style={modalStyle}>
                        <h3>This is a modal</h3>
                        <button onClick={() => setShowModal(false)}>Click to hide the modal</button>
                    </div>
                </Modal>
            }
        </div>
    )
}

export default ModalViewer
