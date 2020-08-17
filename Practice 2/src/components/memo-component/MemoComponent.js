import React from 'react';

function MemoComponent({message}) {
    console.log('Child Render');
    return <h3>Memo component: {message}</h3>;
}

export default React.memo(MemoComponent);