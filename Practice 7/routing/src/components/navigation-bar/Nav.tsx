import React from 'react'
import INavLink from './INavLink'
import NavItem from './NavItem';

function Nav(props: {links: INavLink[]}) {
    let links = props.links;

    return <>
        {
            (links && links.length > 0) ? (
                <ul>
                    {
                        links.map(link => <li key={link.id}><NavItem link={link} /></li>)
                    }
                </ul>
            ) : <div>Links are not available</div>
        }
    </>
}

export default Nav
