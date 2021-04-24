import React, { Component } from 'react'

class NormalComponent extends Component {
    render() {
        console.log('Normal Component Rendering');
        return (
            <div>
                Normal Component: {this.props.name}
            </div>
        )
    }
}

export default NormalComponent
