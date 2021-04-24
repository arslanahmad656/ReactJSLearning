import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    updateCount(value) {
        console.info('Update count called with value ', value);
        this.setState(prevState => {
            console.log(prevState);
            return {
                count: prevState.count++
            }
        }, () => {
            console.log('After udpating the state, state is:', this.state);
        });
    }

    updateCountSingle() {
        console.log('Inside update count single');
        this.updateCount(1);
    }

    updateCountMultiple() {
        console.log('Inside udpate count multiple');
        for (let i = 0; i < 5; i++) {
            this.updateCount(2);
        }
    }
    
    render() {
        console.info('Render is called');
        return (
            <div>
                <h1>Current Count: {this.state.count}</h1>
                <button onClick={() => this.updateCountSingle()}>Single Increment</button>
                <button onClick={() => this.updateCountMultiple()}>Multiple Increment</button>
            </div>
        )
    }
}

export default Counter
