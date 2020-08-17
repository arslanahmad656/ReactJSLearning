import React, { useReducer } from 'react'
import { persons } from './persons'
import Person from './Person'
import { personReducer } from './personReducer'
import AddPersonForm from './AddPersonForm'

const warningStyles = {
    fontStyle: 'italic',
    color: 'orange'
}

function PersonList() {
    const [personsState, personsDispatch] = useReducer(personReducer, persons)

    return (
        <div>
            <h2>
                Persons:
            </h2>
            {
                personsState.length === 0 ? (
                    <p style={warningStyles}>Persons are not available. Use the form to add persons.</p>
                ) : (
                    <ul>
                        {
                            personsState.map(p => (
                                <li key={p.id}>
                                    <Person person={p} />&nbsp;
                                    <button onClick={() => personsDispatch({type: 'remove', value: p})}>
                                        Remove
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }

            <hr/>
            <AddPersonForm handleAddPerson={person => personsDispatch({type: 'add', value: person})} />
        </div>
    )
}

export default PersonList
