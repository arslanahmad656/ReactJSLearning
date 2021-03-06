import React, { useEffect, useState } from 'react'
import Nav from '../navigation-bar/Nav'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import INavLink from '../navigation-bar/INavLink'

import mainStyles from '../../styles/main.module.css'
import SideNav from '../navigation-bar/SideNav'
import IPost from '../Posts/IPost'
import Posts from '../Posts/Posts'
import IComment from '../comments/IComment'
import Comments from '../comments/Comments'
import { request } from 'https'

const mainRoutes: INavLink[] = [
    {id: 1, text: 'Home', link: '/'},
    {id: 2, text: 'Posts', link: '/posts'},
    {id: 3, text: 'Comments', link: '/comments'}
]

function Main() {
    const [comments, setComments] = useState([] as IComment[]);

    const fetchData = async (url: string) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    const fetchComments = async () => {
        const json = await fetchData('https://jsonplaceholder.typicode.com/comments');
        const comments: IComment[] = json;
        return comments;
    }

    useEffect(() => {
        (async () => {
            let fetchedComments = await fetchComments();
            setComments(fetchedComments);
        })()
    }, [])

    return (
        <Router>
            <nav className={`${mainStyles.reset} ${mainStyles.main}`}>
                <Nav links={mainRoutes} />
            </nav>

            <Switch>
                <Route path="/posts" render={props => <Posts {...props} />} />
                <Route path="/comments" render={props => <Comments {...props} comments={comments} />} />
                <Route exact={true} path="/" render={() => <div>Select a link from the top navigation bar</div>} />
            </Switch>
        </Router>
    )
}

export default Main
