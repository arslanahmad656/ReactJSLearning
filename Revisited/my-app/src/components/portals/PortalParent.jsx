import React, { Component } from 'react'
import Modal from './Modal'

export class PortalParent extends Component {
    state = {
        showModal: false
    }

    handleModalClose = () => {
        this.setState({
            showModal: false
        });
    }

    showModal = () => {
        this.setState({
            showModal: true
        });
    }

    render() {
        return (
            <div>
                <h1>Modal Test</h1>
                <button onClick={this.showModal}>Show Modal</button>
                {
                    this.state.showModal && (
                        <Modal onModalClose={this.handleModalClose}>
                            <h2>Hello Modal</h2>
                        </Modal>
                    )
                }
            </div>
        )
    }
}

export default PortalParent
