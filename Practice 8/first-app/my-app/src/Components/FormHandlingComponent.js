import React, { Component } from "react";

const styles = {
    middle: {
        verticalAlign: 'middle'
    },
    heading: {
        color: 'blue',
        fontSize: '48px'
    }
}

export class FormHandlingComponent extends Component {
    techs;

    constructor(props) {
        super(props);

        this.techs = [
            {id: 1, name: 'Angular'},
            {id: 2, name: 'ReactJS'},
            {id: 3, name: 'VueJS'}
        ];

        this.state = {
            username: '',
            comments: '',
            technology: 2,
            postalCode: ''
       }
    }

    /**
     * Handles the event handler for username change
     * @param {Event} event 
     */
    usernameChangeHandler = event => {
        this.setState({
            username: event.target.value
        });
    }

    commentsChangeHandler = event => {
        this.setState({
            comments: event.target.value
        });
    }

    technologyChangeHandler = event => {
        this.setState({
            technology: event.target.value
        })
    }

    inputChangeHandler(event, property, value) {
        console.log(property, value);
        console.log(event);
        this.setState({
            [property]: value
        });
    }

    submitHandler = event => {
        let {username, comments, technology, postalCode} = this.state;
        alert(`${username}, ${comments}, ${technology}, ${postalCode} submitted.`);
        event.preventDefault();
    }

    render() {
        let {username, comments, technology, postalCode} = this.state;
        return(
            <div>
                <p style={styles.heading}>Controlled Forms</p>
                <form onSubmit={event => this.submitHandler(event)}>
                    <div>
                        <label>Username: </label>
                        <input type="text"
                            value={username}
                            onChange={this.usernameChangeHandler}
                        />
                        <p>{this.state.username}</p>
                    </div>
                    <div>
                        <label>Comments: </label>
                        <textarea
                            value={comments}
                            onChange={this.commentsChangeHandler}
                            rows="5"
                            style={styles.middle}
                        ></textarea>
                        <p>{comments}</p>
                    </div>
                    <div>
                        <label>
                            Technology: 
                        </label>
                        <select value={technology} onChange={this.technologyChangeHandler}>
                            {
                                this.techs.map(tech => <option key={tech.id} value={tech.id}>{tech.name}</option>)
                            }
                        </select>
                        <p>{technology} {this.techs.filter(t => t.id == technology)[0].name}</p>
                    </div>
                    <div>
                        <label>Postal Code: </label>
                        <input type="text"
                            value={postalCode}
                            onChange={event => this.inputChangeHandler(event, 'postalCode', event.target.value)}
                        />
                        <p>{postalCode}</p>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}