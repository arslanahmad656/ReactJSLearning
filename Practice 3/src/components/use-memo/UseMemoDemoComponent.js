import React, { useState, useMemo } from 'react'

function UseMemoDemoComponent() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // const isEven = () => {
    //     let i = 0;
    //     while (i < 2000000000) i++;
    //     return count1 % 2 === 0;
    // }

    const isEven = React.useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return count1 % 2 === 0;
    }, [count1])

    return (
        <div>
            <p>
                Count1: {count1} - <span>{isEven ? 'Even' : 'Odd'}</span><br/>
                Count2: {count2}
            </p>
            <div>
                <button onClick={() => setCount1(prev => prev + 1)}>Increment Count 1</button> 
                <button onClick={() => setCount2(prev => prev + 1)}>Increment Count 2</button>
            </div>
        </div>
    )
}

export default UseMemoDemoComponent
