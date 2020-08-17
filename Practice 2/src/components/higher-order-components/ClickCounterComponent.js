import React, { Component } from 'react'
import counter from './counter'

class ClickCounterComponent extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.info}</h2>
                <button onClick={this.props.incrementCount}>Incremented {this.props.count} times</button>  
            </div>
        )
    }
}

export default counter(ClickCounterComponent, 5)
