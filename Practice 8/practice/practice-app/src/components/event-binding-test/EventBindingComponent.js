import React, { Component } from 'react';

class EventBindingComponent extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello World!'
        };
    }

    clickHandler() {
        console.log(this);
        this.setState(prev => prev.message = 'Message Changed', () => console.log(this.state.message));
    }

    render() {
        return(
            <div>
                <p>
                    Message: {this.state.message}
                </p>
                <button onClick={() => this.clickHandler()}>Change Message</button>
            </div>
        )
    }
}

export default EventBindingComponent;