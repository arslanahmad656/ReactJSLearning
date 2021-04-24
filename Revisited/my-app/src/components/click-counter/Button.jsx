import React from 'react'

function Button(props) {
    return (
        <button onClick={props.clickHandler}>
            {props.message}
        </button>
    )
}

export default Button
