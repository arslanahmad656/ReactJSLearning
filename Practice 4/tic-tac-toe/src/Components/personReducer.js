export const personReducer = (currentPersons, action) => {
    switch (action.type) {
        case 'add': return [...currentPersons, action.value];
        case 'remove': return currentPersons.filter(p => p !== action.value);
        default: return currentPersons;
    }
}