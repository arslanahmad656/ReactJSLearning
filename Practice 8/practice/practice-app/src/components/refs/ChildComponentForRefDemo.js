import React, { Component } from 'react'

class ChildComponentForRefDemo extends Component {
    constructor(props) {
        super(props)
        
        this.headingRef = React.createRef();
    }

    setStyle = () => {
        this.headingRef.current.style.color = 'Red';
    }

    alertChild() {
        alert('I am from child');
    }
    

    render() {
        return (
            <div>
                <h2 ref={this.headingRef}>This is child component.</h2>
            </div>
        )
    }
}

export default ChildComponentForRefDemo
