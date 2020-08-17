import React from 'react'
import useInput from './useInput'

function InputHookUsageComponent() {
    const [value1, , onChange1] = useInput('Arslan');
    const [value2, reset2, onChange2] = useInput('Asim');
    return (
        <div>
            <input value={value1} onChange={onChange1}/> <br/>
            <input value={value2} onChange={onChange2}/> <button onClick={reset2}>Reset</button>
        </div>
    )
}

export default InputHookUsageComponent
