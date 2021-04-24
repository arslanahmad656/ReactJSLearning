import React, { Component } from 'react';

class LifeCycleComponentC extends Component {
    constructor(props) {    // Mounting
        super();
        console.log('Component C constructor');

        this.state = {
            value: props.text
        };
    }

    static getDerivedStateFromProps(props, state) { // Mounting, Updating
        console.log('Component C getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {   // Updating
        console.log('Component C shouldComponentUpdate');
        // console.log(nextProps, nextState);
        if (nextState.value === 'error') {
            throw 'Error thrown intentionally';
        }
        return true;
    }

    render() { // Mounting, Updating
        console.log('Component C render');
        return (
            <div>
                <h1>Component B {this.state.value}</h1>
                <button onClick={this.initiateUpdateChain}>Initiate Update Chain of Component B</button>
            </div>
        )
    }

    initiateUpdateChain = () => {
        this.setState({
            value: 'Changed State'
        });
    }

    componentDidMount() {   // Mounting
        console.log('Component C componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { // Updating
        console.log('Component C getSnapshotBeforeUpdate');
        // console.log(prevProps, prevState);
        return {custom: 'My snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {    // Updating
        console.log('Component C componentDidUpdate');
        // console.log(prevProps, prevState, snapshot);
    }
}

export default LifeCycleComponentC;