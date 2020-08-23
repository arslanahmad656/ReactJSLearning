import React from 'react'
import INavLink from './INavLink'
import { Link } from 'react-router-dom'

function NavItem(props: {link: INavLink}) {
    const link = props.link;

    return (
        <Link to={link.link}>{link.text}</Link>
    )
}

export default NavItem
