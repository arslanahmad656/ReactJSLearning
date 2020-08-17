import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const AddPersonForm = ({handleAddPerson}) => {
    console.log('Form rendering')
    const [personName, setPersonName] = useState('');
    
    const handleInputChange = event => {
        setPersonName(event.target.value);
    }

    const handleFormSubmitInner = event => {
        handleAddPerson({
            id: uuid(),
            name: personName
        });
        event.preventDefault();
    }

    return (
        <form onSubmit={handleFormSubmitInner}>
            <input type="text" name="personName" placeholder="Person name..." value={personName} onChange={handleInputChange} />
            &nbsp;<button type="submit">Add Person</button>
        </form>
    )
}

export default React.memo(AddPersonForm);
