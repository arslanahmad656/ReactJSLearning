import React from 'react'

function ErrorComponent({technology}) {
    if (technology && technology.toLowerCase() == 'vue') {
        throw new Error("I don't know Vue.JS");
    }

    return (
        <div>
            <h3>The component is {technology}</h3>
        </div>
    )
}

export default ErrorComponent
