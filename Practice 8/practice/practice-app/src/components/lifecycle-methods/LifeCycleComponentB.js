import React, { Component } from 'react';
import LifeCycleComponentD from './LifeCycleComponentD';

class LifeCycleComponentB extends Component {
    constructor(props) {    // Mounting
        super();
        console.log('Component B constructor');

        this.state = {
            value: props.text
        };
    }

    static getDerivedStateFromProps(props, state) { // Mounting, Updating
        console.log('Component B getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {   // Updating
        console.log('Component B shouldComponentUpdate');
        // console.log(nextProps, nextState);
        if (nextState.value === 'error') {
            throw 'Error thrown intentionally';
        }
        return true;
    }

    render() { // Mounting, Updating
        console.log('Component B render');
        return (
            <div>
                <h1>Component B {this.state.value}</h1>
                <button onClick={this.initiateUpdateChain}>Initiate Update Chain of Component B</button>
                <hr/>
                <LifeCycleComponentD text='Component D'/>
            </div>
        )
    }

    initiateUpdateChain = () => {
        this.setState({
            value: 'Changed State'
        });
    }

    componentDidMount() {   // Mounting
        console.log('Component B componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { // Updating
        console.log('Component B getSnapshotBeforeUpdate');
        // console.log(prevProps, prevState);
        return {custom: 'My snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {    // Updating
        console.log('Component B componentDidUpdate');
        // console.log(prevProps, prevState, snapshot);
    }
}

export default LifeCycleComponentB;