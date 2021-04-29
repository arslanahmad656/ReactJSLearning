import React from 'react'

const context = React.createContext('This is the default context');

const { Provider: EmailContextProvider, Consumer: EmailContextConsumer } = context;

export default {EmailContextProvider, EmailContextConsumer}

export { context as EmailContext }
