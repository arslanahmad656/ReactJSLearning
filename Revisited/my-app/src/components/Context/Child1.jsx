import React, { Component } from 'react'
import Child2 from './Child2'
import { EmailContext } from './emailContext'

class Child1 extends Component {
    static contextType = EmailContext
    render() {
        return (
            <div>
                Child 1, email context value: {this.context}
                <Child2 />
            </div>
        )
    }
}

export default Child1
