import React, { Component } from 'react'
import NormalComponent from './NormalComponent';
import PureComp from './PureComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'RAVIAN656'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'RAVIAN656'
            })
        }, 10000);
    }
    
    render() {
        console.log('******************************* Parent Component Rendering *******************************');
        return (
            <div>
                Parent Component
                <NormalComponent name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent
