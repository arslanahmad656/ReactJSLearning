import React, { Component } from 'react'

const errorStyles = {
    color: 'red'
}

class ErrorBoundaryComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false,
             error: undefined
        }
    }
    
    static getDerivedStateFromError(error) {
        console.error(error);
        return {
            hasError: true,
            error: error
        }
    }

    componentDidCatch(error, info) {
        console.error(error);
        console.error(info);
    }

    render() {
        if (this.state.hasError === true) {
            return <p style={errorStyles}><i>Could not render the book. {this.state.error && this.state.error.message}</i></p>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundaryComponent
