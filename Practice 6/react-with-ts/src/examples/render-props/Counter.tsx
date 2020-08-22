import React, { useState } from 'react'

interface ICounterProps {
    render: (count: number, incrementCount: () => void) => any;
}

function Counter(props: ICounterProps) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prev => prev + 1);
    }

    return (
        props.render(count, incrementCount)
    )
}

export default Counter
