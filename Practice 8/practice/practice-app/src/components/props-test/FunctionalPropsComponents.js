import React from 'react';

const FunctionalPropsComponent = ({name, nick, children: child}) => {
    return (
        <div>
            <h2>Hello {name} a.k.a {nick}</h2>
            <h3>{child}</h3>
        </div>);
}

export default FunctionalPropsComponent;