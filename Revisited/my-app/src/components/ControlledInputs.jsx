import React, { Component } from 'react'

class ControlledInputs extends Component {
    constructor(props) {
        super(props)
        
        this.areas = ['Angular', 'React', 'Vue'];
        this.state = {
             name: 'Arslan',
             comments: 'Hello World',
             area: this.areas[1]
        };
    }
    
    render() {
        return (
            <div>
                <div>
                    <h2>Uncontrolled Inputs</h2>
                    <input type="text" placeholder="name" /> <br/><br/>
                    <textarea placeholder="comments" /> <br/> <br/><br/>
                    <select>
                        {
                            this.areas.map((a, i) => <option key={i} value={a}>{a.toUpperCase()}</option>)
                        }
                    </select>
                </div>
                <div>
                    <h2>Controlled Inputs</h2>
                    <input type="text" placeholder="name" 
                    value={this.state.name} 
                    onChange={evt => this.setState({name: evt.target.value})}
                    />
                </div>
            </div>
        )
    }
}

export default ControlledInputs
