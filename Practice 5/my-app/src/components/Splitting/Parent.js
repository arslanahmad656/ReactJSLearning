import React, { useState } from 'react'
import Child from './Child';
import LazyComponentFunction from './LazyComponentFunction';
import ComponentLoading from './ComponentLoading';

console.log('Parent module has been loaded.');


function Parent() {
    const [nestedComponentVisible, setNestedComponentVisible] = useState(false);
    const [lazyComponentVisibility, setLazyComponentVisibility] = useState(false);

    return (
        <div>
            <h2>Parent Component</h2>
            <hr />
            <button onClick={() => setLazyComponentVisibility(visible => !visible)}>Toggle Lazy Component Visibility</button>
            {
                lazyComponentVisibility && <>
                    <LazyComponentFunction 
                        resolve={() => import('./Child4')} 
                        props={{info: 'Component loaded using function component', visible: nestedComponentVisible}}
                        loadingIndicator={{component: ComponentLoading, props: {componentName: 'Child4'}}} />
                    <button onClick={() => setNestedComponentVisible(visible => !visible)}>Toggle Visibility</button>
                </>
            }            
            <hr />
        </div>
    )
}

export default Parent
