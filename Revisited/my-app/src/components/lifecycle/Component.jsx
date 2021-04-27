import React, { Component } from 'react'

class Lifecycle extends Component {
    constructor(props) {
        super(props)
        
        this.name = props.name;
        this.addStateButton = props.addStateButton;
        this.state = {
             state: 'unchanged'
        }

        console.log(`${this.name} constructor`);
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`${props.name} getDerivedStateFromProps`);
        return null;
    }
    
    changeState = () => {
        this.setState({
            state: 'changed'
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`${this.name} shouldComponentUpdate`);
        return true;
    }

    render() {
        console.log(`${this.name} render`);
        return (
            <div>
                <h2 style={{display: 'inline-block'}}>{`${this.name} - ${this.state.state} `}</h2>
                {
                    this.addStateButton && <button onClick={this.changeState}>Change State</button>
                }
                {this.props.children}
            </div>
        )
    }

    componentDidMount() {
        console.log(`${this.name} componentDidMount`);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`${this.name} getSnapshotBeforeUpdate`);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(`${this.name} componentDidUpdate`);
    }
}

export default Lifecycle
