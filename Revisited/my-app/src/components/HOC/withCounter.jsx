import React, { Component } from 'react'

const withCounter = (WrappedComponent, initialValue, step) => {
    class WithCounter extends Component {
        state = {
            count: initialValue
        }

        incrementCount = () => {
            this.setState(prev => ({
                count: prev.count + step
            }));
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

    return WithCounter;
}

export default withCounter