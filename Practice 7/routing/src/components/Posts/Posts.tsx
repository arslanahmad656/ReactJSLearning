import React from 'react'
import IPost from './IPost'
import INavLink from '../navigation-bar/INavLink';
import Nav from '../navigation-bar/Nav';
import mainStyles from '../../styles/main.module.css'
import { Switch, Route } from 'react-router-dom';
import Post from './Post';

function Posts(props: {posts: IPost[], match: {url: string}}) {
    const { posts, match: {url: parentUrl} } = props;
    const postLinks: INavLink[] = posts.map(post => ({
        id: post.id,
        text: post.title || '[No Title Available]',
        link: `${parentUrl}/${post.id}`
    }));

    return (
        <>
        {
            (posts && posts.length > 0) ? (
                <div className={`${mainStyles.routableContainer}`}>
                    <nav className={`${mainStyles.reset} ${mainStyles.side}`}>
                        <Nav links={postLinks} />
                    </nav>
                    <div>
                        <Switch>
                            <Route path={`${parentUrl}/:postId`} render={(props: any) => <Post post={posts.find(post => post.id == props.match.params.postId)} />} />
                            <Route path={`${parentUrl}`} render={() => <div>Please select a post</div>} />
                        </Switch>
                    </div>
                </div>
            ) : <b>Posts are not available</b>
        }
        </>
    )
}

export default Posts
