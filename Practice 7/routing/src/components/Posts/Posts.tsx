import React, { useEffect, useState } from 'react'
import IPost from './IPost'
import INavLink from '../navigation-bar/INavLink';
import Nav from '../navigation-bar/Nav';
import mainStyles from '../../styles/main.module.css'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Post from './Post';

function Posts(props: any) {
    const routeMatch = useRouteMatch();
    const [posts, setPosts] = useState([] as IPost[]);
    const [postLinks, setPostLinks] = useState([] as INavLink[]);

    const fetchData = async (url: string) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        }
    }

    const fetchPosts = async () => {
        const json = await fetchData('https://jsonplaceholder.typicode.com/posts');
        const posts: IPost[] = json;
        return posts;
    }

    useEffect(() => {
        (async () => {
            let fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts);

            let links = fetchedPosts.map(post => ({
                id: post.id,
                text: post.title || '[No Title Available]',
                link: `${routeMatch.url}/${post.id}`
            }));

            setPostLinks(links);
        })();
    }, []);

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
                            <Route path={`${routeMatch.path}/:postId`} render={(props: any) => <Post post={posts.find(post => post.id == props.match.params.postId)} />} />
                            <Route exact={true} path={`${routeMatch.path}`} render={() => <div>Please select a post</div>} />
                        </Switch>
                    </div>
                </div>
            ) : <b>Posts are not available</b>
        }
        </>
    )
}

export default Posts
