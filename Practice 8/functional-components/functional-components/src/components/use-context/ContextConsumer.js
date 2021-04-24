import React, { useContext } from 'react'
import { UserContext, EmailContext } from './Contexts'

function ContextConsumer() {
    const userContext = React.useContext(UserContext);
    const emailContext = React.useContext(EmailContext);
    return (
        <div>
            <p>Username: {userContext}</p>
            <p>Email Address: {emailContext}</p>
        </div>
    )
}

export default ContextConsumer
