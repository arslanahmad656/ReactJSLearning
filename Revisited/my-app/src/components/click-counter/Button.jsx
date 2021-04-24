import React from 'react'

function Button({message, clickHandler: onClick}) {
    return (
        <button onClick={onClick}>
            {message}
        </button>
    )
}

export default Button
