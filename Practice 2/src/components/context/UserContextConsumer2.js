import React, { Component } from 'react'
import UserContext from './UserContext'

class UserContextConsumer2 extends Component {
    static contextType = UserContext;

    render() {
        return (
            <div>
                <h2>Inside Consumer 2, Username is {this.context}</h2>
            </div>
        )
    }
}

export default UserContextConsumer2
