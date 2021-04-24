import React, { PureComponent } from 'react'

class PureComponentDemo extends PureComponent {
    render() {
        console.log('PureComponent render')
        return (
            <div>
                <h4>Pure Component {this.props.value}</h4>
            </div>
        )
    }
}

export default PureComponentDemo
