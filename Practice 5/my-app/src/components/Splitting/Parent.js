import React, { useState, Suspense } from 'react'
import Child from './Child';
import LazyComponentFunction from './LazyComponentFunction';
import ComponentLoading from './ComponentLoading';

console.log('Parent module has been loaded.');

const delay = async ms => {
    await new Promise(resolve => setTimeout(resolve, ms));
}

function Parent() {
    const [nestedComponentVisible, setNestedComponentVisible] = useState(false);
    const [lazyComponentVisibility, setLazyComponentVisibility] = useState(false);
    
    const [suspenseComponentInnerVisibility, setsuspenseComponentInnerVisibility] = useState(false);
    const [suspenseComponentVisibility, setSuspenseComponentVisibility] = useState(false);

    const SuspenseComponent = React.lazy(() => delay(5000).then(() => import('./Child4')));

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

            <button onClick={() => setSuspenseComponentVisibility(visible => !visible)}>Toggle Suspense Component Visibility</button>
            {
                suspenseComponentVisibility && <>
                    <Suspense fallback={<div>Suspense component is loading</div>}>
                        <SuspenseComponent info='loaded using suspense' visible={suspenseComponentInnerVisibility} />
                    </Suspense>
                    <button onClick={() => setsuspenseComponentInnerVisibility(visible => !visible)}>Toggle inner visibility</button>
                </>
            }

        </div>
    )
}

export default Parent
