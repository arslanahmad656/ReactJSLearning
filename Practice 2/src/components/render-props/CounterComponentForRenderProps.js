import React, { Component } from 'react'

class CounterComponentForRenderProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }

        this.incrementValue = props.step;
    }

    incrementCounter = () => {
        this.setState(prevState => ({
            count: prevState.count + this.incrementValue
        }));
    }
    
    render() {
        return (
            this.props.render(this.state.count, this.incrementCounter)
        );
    }
}

export default CounterComponentForRenderProps
