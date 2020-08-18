import React, { useReducer, useEffect } from 'react'

const initialState = {
    module: null,
    hasError: false,
    error: null,
    loaded: false
}

const stateReducer = (state, action) => {

    switch (action.type) {
        case 'error': return {
            module: null,
            hasError: true,
            error: action.error,
            loaded: true
        };

        case 'loaded': return {
            module: action.module,
            hasError: false,
            error: null,
            loaded: true
        }

        default: return state;
    }
}

function LazyComponentFunction({resolve, props, loadingIndicator: {component: loadingComponent, props: loadingComponentProps}}) {
    const [state, stateDispatch] = useReducer(stateReducer, initialState)
    const { module, hasError, error, loaded } = state;

    useEffect(() => {
        const loadComponent = async () => {
            try {
                const {default: component} = await resolve();
                stateDispatch({type: 'loaded', module: component});
            } catch (err) {
                stateDispatch({type: 'error', error: err})
            }
        };

        loadComponent();

        return () => console.log('Lazy component has been unloaded.');
    }, [])

    if (!loaded) return React.createElement(loadingComponent, loadingComponentProps)
    if (hasError) return <div>{error.message}</div>
    if (module) return React.createElement(module, props);
    return <div>Unexpected behavior</div>
}

export default LazyComponentFunction
