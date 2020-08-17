export const initialValue = 0;
export const reducer = (currentState, action) => {
    console.log('Count reducer1 reducer executed', currentState, action);
    switch (action) {
        case 'increment': return currentState + 1;
        case 'decrement': return currentState - 1;
        case 'reset': return initialValue;
        default: return currentState;
    }
}