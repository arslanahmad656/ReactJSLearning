import React, { Component } from 'react'

class FormHandlingComponent extends Component {
    constructor(props) {
        super(props)
        
        this.areas = ['ReactJS', 'Angular', 'VueJS']
        this.state = {
             username: '',
             comments: '',
             area: 0
        }
    }
    
    formSubmitHandler = event => {
        alert('Form submitted.');
        console.log(event);
        event.preventDefault();
    }

    formFieldvalueChangeHandler = (event, property) => {
        this.setStateValue(property, event.target.value);
        event.preventDefault();
    }

    setStateValue = (prop, value) => {
        this.setState({
            [prop]: value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                    <label>
                        Username: 
                        <input 
                            type='text' 
                            value={this.state.username} 
                            onChange={evt => this.formFieldvalueChangeHandler(evt, 'username')}
                            placeholder='Enter username...' />
                    </label>
                    <br/> <br></br>
                    <label>
                        <span>Comments: </span> 
                        <textarea 
                            value={this.state.comments} 
                            onChange={evt => this.formFieldvalueChangeHandler(evt, 'comments')}
                            placeholder='Enter comments...'/>
                    </label>
                    <br/><br/>
                    <label>
                        Area: 
                        <select value={this.state.area} onChange={evt => this.formFieldvalueChangeHandler(evt, 'area')}>
                            {
                                this.areas.map((a, i) => <option value={i}>{a}</option>)
                            }
                        </select>
                    </label>
                </form>
                <hr />
                <div>
                    <p>Username: {this.state.username}</p>
                    <p>Comments: {this.state.comments}</p>
                    <p>Area: {this.state.area}</p>
                </div>

                <hr/>

                <div>
                    <button onClick={() => this.setStateValue('username', 'changed username')}>Change Username</button>
                    <button onClick={() => this.setStateValue('comments', 'changed comments')}>Change Comments</button>
                    <button onClick={() => this.setStateValue('area', '1')}>Change Value</button>
                </div>
            </div>
        )
    }
}

export default FormHandlingComponent
