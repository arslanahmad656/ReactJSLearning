import React, { Component } from 'react'
import ChildComponentForRefDemo from './ChildComponentForRefDemo';

class ComponentRefComponent extends Component {
    constructor(props) {
        super(props)
    
        this.childComponentRef = null;
        this.refSetter = element => {
            console.log(element);
            this.childComponentRef = element;
        };
    }

    clickHandler1 = () => {
        this.childComponentRef.setStyle();
    }

    clickHandler2 = () => {
        this.childComponentRef.alertChild();
    }
    
    render() {
        return (
            <div>
                <ChildComponentForRefDemo ref={this.refSetter}/>
                <button onClick={this.clickHandler1}>Invoke Child Method 1</button>
                <button onClick={this.clickHandler2}>Invoke Child Method 2</button>
            </div>
        )
    }
}

export default ComponentRefComponent
