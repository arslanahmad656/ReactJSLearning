import React, { Component } from 'react'

export class Boundary extends Component {
    state = {
        hasError: false,
        error: null
    }

    static getDerivedStateFromError (error) {
        return {
            hasError: true,
            error
        }
    }

    componentDidCatch(error, errorInfo) {
    }

    render() {
        return (
            this.state.hasError ? (
                <p style={{color: 'rgba(255, 0, 0, 0.75)'}}>
                    <b>
                        Error occurred while rendering the component. <i>{this.state.error && this.state.error.message}</i>
                    </b>
                </p>
            ) : (
                this.props.children
            )
        )
    }
}

export default Boundary
