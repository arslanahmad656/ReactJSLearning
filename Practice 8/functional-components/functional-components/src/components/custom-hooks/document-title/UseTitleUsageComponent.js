import React, { useState, useEffect } from 'react'
import useTitle from './useTitle';

function UseTitleUsageComponent() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(5);

    useTitle(count1);

    useEffect(() => {
        console.log('Changing button color directly from useEffect');
        document.getElementById('my-btn').style.color = 'Red';
    }, []);

    return (
        <div>
            <button id='my-btn' onClick={() => setCount1(prev => prev + 1)}>Updating using useTitle hook</button>
        </div>
    )
}

export default UseTitleUsageComponent
