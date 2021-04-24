import React, { Component } from 'react';
import MemoComponent from './MemoComponent';

class MemoParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Initial Message'
        };
    }

    render() {
        console.log('********************** Parent Render **********************');
        return (
            <>
                <h2>Parent Message: {this.state.message}</h2>
                <MemoComponent message={this.state.message} />
            </>
        )
    }

    componentDidMount() {
        setInterval(() => this.setState({message: 'Message Changed'}), 5000);
    }
}

export default MemoParentComponent;