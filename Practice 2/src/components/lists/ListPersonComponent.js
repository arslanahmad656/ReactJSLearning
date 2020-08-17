import React from 'react';
import Persons from './Persons';
import SinglePersonComponent from './SinglePersonComponent';

const ListPersonComponent = () => {
    let persons = Persons;
    return (
        <ul>
            {
                persons.map(p => <SinglePersonComponent key={p.id} person={p} />)
            }
        </ul>
    )
}

export default ListPersonComponent;