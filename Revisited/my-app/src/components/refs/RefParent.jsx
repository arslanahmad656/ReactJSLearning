import React, { Component } from 'react'
import ForwardingRef from './ForwardingRef';
import RefChild1 from './RefChild1';

class RefParent extends Component {
    constructor(props) {
        super(props)

        this.classComponentRef = React.createRef();
        this.forwardedRef = React.createRef();
    }

    render() {
        return (
            <div>
                <RefChild1 ref={this.classComponentRef} />
                <button onClick={() => {this.classComponentRef.current.focusInput()}}>Focus Class Component Input</button>
                <br/><br/>
                <ForwardingRef ref={this.forwardedRef}/>
                <button onClick={() => this.forwardedRef.current.focus()}>Focus Forwarded Ref Input</button>
            </div>
        )
    }
}

export default RefParent
