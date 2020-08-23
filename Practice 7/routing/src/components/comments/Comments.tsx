import React, { useState, useEffect } from 'react'
import IComment from './IComment'
import INavLink from '../navigation-bar/INavLink';
import mainStyles from '../../styles/main.module.css'
import Nav from '../navigation-bar/Nav';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Comment from './Comment'

function Comments(props: {comments: IComment[]}) {
    const routeMatch = useRouteMatch();
    const [childLinks, setChildLinks] = useState([] as INavLink[]);

    const { comments } = props;

    useEffect(() => {
        (async () => {
                let mappedLinks = comments.map(comment => ({
                id: comment.id,
                link: `${routeMatch.url}/${comment.id}`,
                text: comment.email || '[No Title Available]'
            }));

            setChildLinks(mappedLinks);
        })();
    }, [])

    return (
        <>
        {
            (comments && comments.length > 0) ? (
                <div className={`${mainStyles.routableContainer}`}>
                    <nav className={`${mainStyles.reset} ${mainStyles.side}`}>
                        <Nav links={childLinks}/>
                    </nav>
                    <div>
                        <Switch>
                            <Route path={`${routeMatch.path}/:commentId`} render={(props: any) => <Comment comment={comments.find(comment => comment.id == props.match.params.commentId)} />} />
                            <Route path={routeMatch.path} render={() => <b>Select a comment from the side navigation bar.</b>} />
                        </Switch>
                    </div>
                </div>
            ) : <div>Comments are not available</div>
        }
        </>
    )
}

export default Comments
