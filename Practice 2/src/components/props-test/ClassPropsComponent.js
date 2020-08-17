import React, {Component} from 'react';

class ClassPropsComponent extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Hello from {this.props.name} a.k.a {this.props.nick}</h2>
                <h3>{this.props.children}</h3>
            </div>);
    }
}

export default ClassPropsComponent;