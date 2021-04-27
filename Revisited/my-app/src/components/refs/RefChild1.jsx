import React, { Component } from 'react'

class RefChild1 extends Component {
    constructor(props) {
        super(props);

        this.inputRef = null;
        this.setInputRef = elem => this.inputRef = elem;
    }

    focusInput = () => {
        if (this.inputRef) {
            this.inputRef.focus();
        }
    }
    
    render() {
        return (
            <div>
                <input placeholder="Component 1" ref={this.setInputRef} />
            </div>
        )
    }
}

export default RefChild1
