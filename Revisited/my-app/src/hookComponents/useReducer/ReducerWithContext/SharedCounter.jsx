export default function getCountReducerMethod (initialValue = 0, step = 1) {
    const stateReducer = (state, action) => {
        let updatedState;
        switch (action.toLowerCase()) {
            case 'increment':
                updatedState = state + step;
                break;
            case 'decrement':
                updatedState = state - step;
                break;
            case 'reset':
                updatedState = initialValue;
                break;
            default:
                updatedState = state;
                break;
        }
    
        return updatedState;
    }
    
    return stateReducer;
} 