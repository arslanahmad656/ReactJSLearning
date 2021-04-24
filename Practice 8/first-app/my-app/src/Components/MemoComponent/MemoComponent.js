import React from 'react'

function MemoComponent({name}) {
    console.log('MEMO COMPONENT RENDERING');
    return (
        <div>
            Memo Component: {name}
        </div>
    )
}

export default React.memo(MemoComponent)
