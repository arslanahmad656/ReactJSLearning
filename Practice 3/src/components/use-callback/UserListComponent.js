import React from 'react'
import UserComponent from './UserComponent'

const UserListComponent = React.memo(({ list, onRemove }) => {
    console.log('Rendering UserListComponent')
    return (
        <ul>
            {
                list.map(user => <UserComponent key={user.id} item={user} onRemove={onRemove} />)
            }
        </ul>
    )
});

export default UserListComponent
