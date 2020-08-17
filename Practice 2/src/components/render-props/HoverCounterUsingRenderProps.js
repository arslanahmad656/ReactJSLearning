import React, { Component } from 'react'

class HoverCounterUsingRenderProps extends Component {
    render() {
        const { info, count, incrementCount } = this.props;
        return (
            <div>
                <h2>{info}</h2>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default HoverCounterUsingRenderProps
