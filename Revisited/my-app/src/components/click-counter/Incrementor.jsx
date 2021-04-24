import React, { useState } from 'react'
import Button from './Button';
import Display from './Display';

function Incrementor({step, initialValue, message}) {
    const [counter, setCounter] = useState(initialValue);
    const incrementor = () => setCounter(counter + step);
    return (
        <>
            <Button message={message}
                clickHandler={incrementor}
            />

            <Display message={counter} />
        </>
    )
}

export default Incrementor
