import {useState} from 'react'

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    
    const reset = () => {
        console.log('reset called');
        return setValue(initialValue);
    }
    
    const onChange = event => {
        console.log('onChange called');
        return setValue(event.target.value);
    }

    return [value, reset, onChange];
}

export default useInput
