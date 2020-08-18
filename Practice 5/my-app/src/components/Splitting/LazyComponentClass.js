import React, { Component } from 'react'

class LazyComponentClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             module: null,
             properties: null,
             hasError: false,
             error: null
        }
    }

    componentDidCatch(error) {
        debugger;
        this.setState({hasError: true, error});
    }

    async componentDidMount() {
        debugger;
        try {
            const {resolve, properties} = this.props;
            const {default: module} = await resolve();
            this.setState({module, properties})

        } catch (err) {
            console.error(err);
            this.setState({hasError: true, error: err})
        }
    }
    
    render() {
        debugger;
        const {module, properties, hasError, error} = this.state;
        if (hasError) return <div>{error.message}</div>;
        if (!module) return <div>Loading module...</div>
        if (module) return React.createElement(module, properties);
        return <div>Module Loaded</div>
    }
}

export default LazyComponentClass
