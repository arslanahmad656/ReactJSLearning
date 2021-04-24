import React, { Component } from 'react'

class ClickCounterUsingRenderProps extends Component {
    render() {
        const { count, info, incrementCount } = this.props;
        return (
            <div>
                <h2>{info}</h2>
                <button onClick={incrementCount}>Incremented {count} times.</button>
            </div>
        )
    }
}

export default ClickCounterUsingRenderProps
