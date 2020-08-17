import React, { Component } from 'react'
import NormalFunctionalComponent from './NormalFunctionalComponent';
import MemoComponent from './MemoComponent';

export class MemoParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'ARSLAN AHMAD 656'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'ARSLAN AHMAD 656'
            });
        }, 5000);
    }

    render() {
        console.log('******************************** PARENT COMPONENT RENDERING ********************************')
        return (
            <div>
                Parent Component
                <NormalFunctionalComponent name={this.state.name} />
                <MemoComponent name={this.state.name} />
            </div>
        )
    }
}

export default MemoParent
