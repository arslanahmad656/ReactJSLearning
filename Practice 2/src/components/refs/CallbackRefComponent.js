import React, { Component } from 'react';

class CallbackRefComponent extends Component {
    constructor(props) {
        super(props);

        this.inputRef = null;
        this.inputRefSetter = element => {
            console.log(element);
            this.inputRef = element;
        }
    }

    render() {
        return (
            <>
                <input ref={this.inputRefSetter}/> <br/>
            </>
        )
    }

    componentDidMount() {
        console.log(this.inputRef);
        if (this.inputRef) {
            this.inputRef.focus();
        }
    }
}

export default CallbackRefComponent;