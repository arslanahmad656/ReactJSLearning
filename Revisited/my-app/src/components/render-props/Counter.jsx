import React, { Component } from 'react'

export class Counter extends Component {
    step = this.props.step || 1
    initialValue = this.props.initialValue || 0

    state = {
        count: this.initialValue
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + this.step
        }));
    }

    render() {
        return (
            <>
                {
                    this.props.render(this.state.count, this.incrementCount)
                }
            </>
        )
    }
}

export default Counter
