import React from 'react'
import IComment from './IComment'
import INavLink from '../navigation-bar/INavLink';
import mainStyles from '../../styles/main.module.css'
import Nav from '../navigation-bar/Nav';
import { Switch, Route } from 'react-router-dom';
import Comment from './Comment'

function Comments(props: {comments: IComment[], match: {url: string}}) {
    const { comments, match: {url: parentUrl}} = props;
    const childLinks: INavLink[] = comments.map(comment => ({
        id: comment.id,
        link: `${parentUrl}/${comment.id}`,
        text: comment.email || '[No Title Available]'
    }));

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
                            <Route path={`${parentUrl}/:commentId`} render={(props: any) => <Comment comment={comments.find(comment => comment.id == props.match.params.commentId)} />} />
                            <Route path={parentUrl} render={() => <b>Select a comment from the side navigation bar.</b>} />
                        </Switch>
                    </div>
                </div>
            ) : <div>Comments are not available</div>
        }
        </>
    )
}

export default Comments
