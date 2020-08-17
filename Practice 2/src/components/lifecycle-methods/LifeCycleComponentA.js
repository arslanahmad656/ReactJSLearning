import React, { Component } from 'react';
import LifeCycleComponentB from './LifeCycleComponentB';
import LifeCycleComponentC from './LifeCycleComponentC';

class LifeCycleComponentA extends Component {
    constructor(props) {    // Mounting
        super();
        console.log('Component A constructor');

        this.state = {
            value: props.text
        };
    }

    static getDerivedStateFromProps(props, state) { // Mounting, Updating
        console.log('Component A getDerivedStateFromProps');
        // return {
        //     value: state.value + ' updated'
        // };
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {   // Updating
        console.log('Component A shouldComponentUpdate');
        // console.log(nextProps, nextState);
        if (nextState.value === 'error') {
            throw 'Error thrown intentionally';
        }
        return true;
    }

    render() { // Mounting, Updating
        console.log('Component A render');
        return (
            <div>
                <h1>Component A {this.state.value}</h1>
                <button onClick={this.initiateUpdateChain}>Initiate Update Chain of Component A</button>
                <hr/>
                <LifeCycleComponentB text='Component B'/>
                <hr/>
                <LifeCycleComponentC text='Component C'/>
            </div>
        )
    }

    initiateUpdateChain = () => {
        this.setState({
            value: 'Changed State'
        });
    }

    componentDidMount() {   // Mounting
        console.log('Component A componentDidMount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { // Updating
        console.log('Component A getSnapshotBeforeUpdate');
        // console.log(prevProps, prevState);
        return {custom: 'My snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {    // Updating
        console.log('Component A componentDidUpdate');
        // console.log(prevProps, prevState, snapshot);
    }
}

export default LifeCycleComponentA;