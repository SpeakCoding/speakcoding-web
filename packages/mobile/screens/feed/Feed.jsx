import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Header, ScrollView } from '@sc/ui/mobile';
import { useAPI } from '../../tools';
import Post from './Post';
import s from './feed.css';

const Feed = () => {
    const fetch = useAPI(),
        [posts, setPosts] = useState([]),
        ready = useRef(false);

    const init = async () => {
        const res = await fetch('/posts.json', { method: 'GET' });

        if (res.data) {
            setPosts(res.data);
            ready.current = true;
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
