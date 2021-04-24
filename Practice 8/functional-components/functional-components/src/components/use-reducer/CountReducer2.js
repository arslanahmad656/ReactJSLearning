export const initialValue = {counter: 0};
export const reducer = (currentState, action) => {
    console.log('Count reducer2 reducer executed', currentState, action);
    switch (action.type) {
        case 'increment': return {counter: currentState.counter + action.value};
        case 'decrement': return {counter: currentState.counter - action.value};
        case 'reset': return initialValue;
        default: return currentState;
    }
}