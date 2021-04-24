import React, { useState } from 'react'

function UseStateComponent3() {
    const [person, setPerson] = useState({firstName: '', lastName: ''});

    return (
        <div>
            <input type='text' placeholder="First name..." value={person.firstName} onChange={event => setPerson({...person, firstName: event.target.value})} /> <br/>
            <input type='text' placeholder="Last name..." value={person.lastName} onChange={event => setPerson({...person, lastName: event.target.value})} /> <br/>
            <p>Person is: {person.firstName} {person.lastName}</p>
        </div>
    )
}

export default UseStateComponent3
