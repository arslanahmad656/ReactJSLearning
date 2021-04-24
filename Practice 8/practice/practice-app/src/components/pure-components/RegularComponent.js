import React, { Component } from 'react'

class RegularComponent extends Component {
    render() {
        console.log('RegularComponent render')
        return (
            <div>
                <h4>Regular Component {this.props.value}</h4>
            </div>
        )
    }
}

export default RegularComponent
