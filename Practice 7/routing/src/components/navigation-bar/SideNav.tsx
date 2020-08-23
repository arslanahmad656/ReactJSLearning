import React from 'react'
import INavLink from './INavLink'
import { linkSync } from 'fs'
import NavItem from './NavItem';

function SideNav(props: {links: INavLink[], fallback: JSX.Element}) {
    const {links, fallback} = props;

    return (
       <>
       {
           (links && links.length > 0) ? (
               links.map(link => <li key={link.id}><NavItem link={link} /></li>)
           ) : fallback
       }
       </>
    )
}

export default SideNav
