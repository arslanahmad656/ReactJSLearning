import React, { Component } from 'react';
import CommunicationsChildComponent from './CommunicationChildComponent';

class CommunucationParentComponent extends Component {
    constructor() {
        super();
        
        this.state = {
            message: 'Parent'
        }
    }

    greetHandler = from => {
        debugger;
        this.setState({
            message: `Hello parent from ${from}`
        });
    }

    render() {
        return (
        <div>
            <h3>{this.state.message}</h3>
            <CommunicationsChildComponent greetHandler={this.greetHandler}/>
        </div>)
    }
}

export default CommunucationParentComponent;