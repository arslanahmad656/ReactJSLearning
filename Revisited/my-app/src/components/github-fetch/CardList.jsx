import React, { Component } from 'react'
import Card from './Card'

export class CardList extends Component {
    constructor(props) {
        super(props);
        this.list = props.cardList;
    }

    render() {
        return (
            this.list.map(({avatar_url, name, company}) => <Card avatar_url={avatar_url} name={name} company={company} />)
        )
    }
}

export default CardList
