import React from 'react'
import UserContext from './UserContext'

function UserContextConsumer1() {
    return (
        <UserContext.Consumer>
            { user => <h2>Inside Consumer 1, Username is {user}</h2>}
        </UserContext.Consumer>
    )
}

export default UserContextConsumer1
