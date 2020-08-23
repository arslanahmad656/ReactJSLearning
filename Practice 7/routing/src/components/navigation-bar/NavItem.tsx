import React from 'react'
import INavLink from './INavLink'
import { NavLink } from 'react-router-dom'
import mainStyles from '../../styles/main.module.css'

function NavItem(props: {link: INavLink}) {
    const link = props.link;

    return (
        <NavLink activeClassName={mainStyles.navLinkActive} to={link.link}>{link.text}</NavLink>
    )
}

export default NavItem
