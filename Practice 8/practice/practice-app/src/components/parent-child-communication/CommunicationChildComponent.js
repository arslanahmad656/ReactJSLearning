import React from 'react';

const CommunicationsChildComponent = ({greetHandler}) => {
    const handler = (evt, arg) => {
        debugger;
        console.log(evt);
        console.log(arg);
        greetHandler(arg);
    }
    return (
        // <button onClick={() => greetHandler('child')}>Change Parent Message</button>
        <button onClick={event => handler(event, 'child')}>Change Parent Message</button>
    );
}

export default CommunicationsChildComponent;