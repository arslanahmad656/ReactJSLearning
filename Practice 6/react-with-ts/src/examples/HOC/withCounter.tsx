import React, { useState } from 'react'

function withCounter(WrappedComponent: (...wrappedComponentProps: any[]) => JSX.Element) {
    function WithCounter(props: any) {
        const [count, setCount] = useState(0);

        const incrementCount = () => setCount(prev => prev + 1);

        return (
            <WrappedComponent count={count} incrementCount={incrementCount} {...props} />
        )
    }

    return WithCounter;
}

export default withCounter
