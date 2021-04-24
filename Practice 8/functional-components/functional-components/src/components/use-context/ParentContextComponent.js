import React from 'react'
import ContextConsumer from './ContextConsumer'
import { EmailContext } from './Contexts'

function ParentContextComponent() {
    return (
        <div>
            <EmailContext.Provider value='arslanahmad656@gmail.com'>
                <ContextConsumer />
            </EmailContext.Provider>
        </div>
    )
}

export default ParentContextComponent
