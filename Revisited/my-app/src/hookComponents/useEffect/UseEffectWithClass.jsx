import React, { Component } from 'react'

class UseEffectWithClass extends Component {
    state = {
        count: 0
    }

    componentDidMount() {
        document.title = `Title counter: ${this.state.count}`;
    }

    componentDidUpdate() {
        document.title = `Title counter: ${this.state.count}`;
    }

    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Increment Count</button>
                Count: {this.state.count}
            </div>
        )
    }
}

export default UseEffectWithClass
