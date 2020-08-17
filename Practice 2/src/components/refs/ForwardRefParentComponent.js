import React, { Component } from 'react'
import ChildForwardRefDemo from './ChildForwardRefDemo';

class ForwardRefParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.childRef = null;
        this.refSetter = element => {
            console.log(element);
            this.childRef = element;
        }
    }

    clickHandler = evt => {
        if (this.childRef) {
            this.childRef.style.color = 'orange';
        }
    }
    
    render() {
        return (
            <div>
                <ChildForwardRefDemo ref={this.refSetter} />
                <button onClick={this.clickHandler}>Interact with child ref</button>
            </div>
        )
    }
}

export default ForwardRefParentComponent
