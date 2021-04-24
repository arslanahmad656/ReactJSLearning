import React from 'react';

const SinglePersonComponent = ({person: {id, name, age}}) => <li>Person {id} ({name}) is {age} years old.</li>;

export default SinglePersonComponent;