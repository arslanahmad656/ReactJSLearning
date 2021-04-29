import React, { Component } from 'react'
import Child3 from './Child3'

class Child2 extends Component {
    render() {
        return (
            <div>
                Child 2
                <Child3 />
            </div>
        )
    }
}

export default Child2
