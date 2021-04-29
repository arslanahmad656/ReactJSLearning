import React, { Component } from 'react'
import DefaultContext from './defaultContext'
import UsernameContext from './usernameContext'

class Child3 extends Component {
    render() {
        return (
            <DefaultContext.DefaultContextConsumer>
                {
                    defaultValue => {
                        return (
                            <UsernameContext.UsernameContextConsumer>
                                {
                                    username => {
                                        return (
                                            <div>
                                                <div>Child 3</div>
                                                <div>Value from default context: {defaultValue}</div>
                                                <div>Username: {username}</div>
                                            </div>
                                        )
                                    }
                                }
                            </UsernameContext.UsernameContextConsumer>
                        )
                    }
                }
            </DefaultContext.DefaultContextConsumer>
        )
    }
}

export default Child3
