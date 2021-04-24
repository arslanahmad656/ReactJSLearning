import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComponent from './PureComponent';

class ParentPureRegularComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: 'Initial Value'
        }
    }
    
    render() {
        console.log('************************** Parent render **************************');
        return (
            <>
                <h4>Parent {this.state.value}</h4>
                <RegularComponent value={this.state.value} />
                <PureComponent value={this.state.value} />
            </>
        )
    }

    componentDidMount() {
        setInterval(() => this.setState({
            value: 'Value Changed'
        }), 2000);
    }
}

export default ParentPureRegularComponent
