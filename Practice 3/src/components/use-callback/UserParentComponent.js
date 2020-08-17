import React, { useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import UserListComponent from './UserListComponent';

function UserParentComponent() {
    const [users, setUsers] = React.useState([
        { id: uuidv4(), name: 'Robin' },
        { id: uuidv4(), name: 'Dennis' },
    ]);

    const [text, setText] = React.useState('');

    const handleText = event => {
        setText(event.target.value);
    }

    const handleAddUser = () => {
        setUsers(users => users.concat({id: uuidv4(), name: text}))
    }

    const handleRemove = useCallback(id => setUsers(users => users.filter(user => user.id !== id)), [users])

    // const handleRemove = id => {
    //     setUsers(users => users.filter(user => user.id !== id));
    // }

    console.log('Rendering UserParentComponent.');
    return (
        <div>
            <input type="text" value={text} onChange={handleText}/>
            <button type="button" onClick={handleAddUser}>Add User</button>

            <UserListComponent list={users} onRemove={handleRemove} />
        </div>
    )
}

export default UserParentComponent
