import React from 'react'

const UserComponent = React.memo(({ item, onRemove }) => {
    console.log('Rendering UserComponent')
    return (
        <li>
            {item.name}
            <button type="button" onClick={() => onRemove(item.id)}>Remove</button>
        </li>
    )
});

export default UserComponent
