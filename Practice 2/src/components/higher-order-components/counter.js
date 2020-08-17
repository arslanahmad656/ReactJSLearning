import React, { Component } from 'react';

const counter = (WrappedComponent, incrementValue) => {
    class Counter extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => ({
                count: prevState.count + incrementValue
            }))
        }

        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props} 
                />
            )
        }
    }

    return Counter;
}

export default counter;