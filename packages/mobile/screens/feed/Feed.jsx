import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Header, ScrollView } from '@sc/ui/mobile';
import { useAPI, useCache } from '../../tools';
import Post from './Post';
import s from './feed.css';

const Feed = () => {
    const fetch = useAPI(),
        [posts, setPosts] = useState([]),
        ready = useRef(false),
        { set } = useCache();

    const init = async () => {
        const res = await fetch('/posts.json', { method: 'GET' });

        if (res.data) {
            setPosts(res.data);
            ready.current = true;

            res.data.forEach(post => {
                set('user', post.user.id, post.user);
                if (post.liker_followee) set('user', post.liker_followee.id, post.liker_followee);
                post.comments.forEach(comment => set('user', comment.user.id, comment.user));
            });
        }
    };

    const updatePost = useCallback(
        (id, fields) => {
            setPosts(posts.map(post => (post.id === id ? { ...post, ...fields } : post)));
        },
        [posts]
    );

    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <Header>
                <div className={s.logo} />
            </Header>

            <ScrollView>
                {posts.map(post => (
                    <Post key={post.id} data={post} update={updatePost} />
                ))}
            </ScrollView>
        </>
    );
};

export default Feed;
