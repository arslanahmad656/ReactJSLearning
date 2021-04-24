import React, { Component } from 'react';

class StateClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessge() {
        debugger;
        this.setState({
            message: 'You have subscribed!'
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.changeMessge()}>Subscribe</button>
            </div>
        )
    }
}

export default StateClassComponent;