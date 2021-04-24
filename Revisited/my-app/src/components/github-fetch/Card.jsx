import React, { Component } from 'react'

export class Card extends Component {
    constructor(props) {
        super(props);

        this.imgUrl = props.avatar_url;
        this.name = props.name;
        this.company = props.company;
    }

    imgStyle = {
        display: 'inline-block',
        width: '75px',
        height: '75px'
    }

    divStyle = {
        display: 'inline-block'
    }

    render() {
        return (
            <div>
                <img src={this.imgUrl} alt={this.name} style={this.imgStyle}/>
                <div style={this.divStyle}>
                    <h2>{this.name}</h2>
                    <h5>{this.company}</h5>
                </div>
            </div>
        )
    }
}

export default Card
