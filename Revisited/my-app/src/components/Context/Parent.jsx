import React, { Component } from 'react'
import Child1 from './Child1'
import EmailContext from './emailContext'
import UsernameContext from './usernameContext'

class Parent extends Component {
    render() {
        return (
            <EmailContext.EmailContextProvider value="arslanahmad656@gmail.com">
                <UsernameContext.UsernameContextProvider value="arslanahmad656">
                    <div>
                        <Child1 />
                    </div>
                </UsernameContext.UsernameContextProvider>
            </EmailContext.EmailContextProvider>
        )
    }
}

export default Parent
