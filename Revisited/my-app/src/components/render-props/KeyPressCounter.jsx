import React from 'react'

function KeyPressCounter({name, count, incrementCount, placeholder}) {
    return (
        <div>
            <h3>Component '{name}'</h3>
            <input placeholder={placeholder} onKeyPress={incrementCount} /><br/>
            <span>
                <i>
                    Key Presses Count: {count}
                </i>
            </span>
        </div>
    )
}

export default KeyPressCounter
