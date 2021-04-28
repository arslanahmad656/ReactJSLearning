import React from 'react'
import withCounter from './withCounter'

function KeyPressCounter({name, placeholder, count, incrementCount}) {
    return (
        <div>
            <h3>Component {name}</h3>
            <br/>
            <input type="text" placeholder={placeholder} onKeyPress={incrementCount} />
            <br/>
            <span>Key Presses: {count}</span>
        </div>
    )
}

export default withCounter(KeyPressCounter, 5, 10)
