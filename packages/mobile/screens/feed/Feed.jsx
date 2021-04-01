import React, { useEffect, useRef, useState } from 'react';
import { Header } from '@sc/ui/mobile';
import { useAPI, useCache, useRouter } from '../../tools';
import { PostsList } from '../../components';
import s from './feed.css';

const Feed = () => {
    const fetch = useAPI(),
        { focused } = useRouter(),
        [posts, setPosts] = useState([]),
        ready = useRef(false),
        { add } = useCache();

    const init = async () => {
        const res = await fetch('/posts.json', { method: 'GET' });

        if (res.data) {
            setPosts(res.data);
            ready.current = true;

            res.data.forEach(post => {
                const users = [post.user, ...post.comments.map(comment => comment.user)];
                if (post.liker_followee) users.push(post.liker_followee);
                add('user', users);
            });
        }
    };

    useEffect(() => {
        if (focused) init();
    }, [focused]);

    return (
        <>
            <Header>
                <div className={s.logo} />
            </Header>

            <PostsList items={posts} />
        </>
    );
};

export default Feed;
