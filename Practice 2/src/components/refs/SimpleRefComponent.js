import React, { Component } from 'react';

class SimpleRefComponent extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    render() {
        return (
            <>
                <input ref={this.inputRef}/> <br/>
            </>
        )
    }

    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus();
    }
}

export default SimpleRefComponent;